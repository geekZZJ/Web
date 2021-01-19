/*
 * @Author: zzj
 * @Date: 2021-01-10 16:31:29
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 17:35:55
 * @Description:
 */

// 正则;
const ncname = "[a-zA-Z_][\\w\\-\\.]*";
const singleAttrIdentifier = /([^\s"'<>/=]+)/;
const singleAttrAssign = /(?:=)/;
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /'([^']*)'+/.source,
  /([^\s"'=<>`]+)/.source,
];
const attribute = new RegExp(
  "^\\s*" +
    singleAttrIdentifier.source +
    "(?:\\s*(" +
    singleAttrAssign.source +
    ")" +
    "\\s*(?:" +
    singleAttrValues.join("|") +
    "))?"
);

const qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
const startTagOpen = new RegExp("^<" + qnameCapture);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;

// *********************************************以上为需要用到的正则

var html =
  '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';

// advance
let index = 0;
function advance(n) {
  index += n;
  html = html.substring(n);
}

function makeAttrsMap(attrs) {
  const map = {};
  for (let i = 0, l = attrs.length; i < l; i++) {
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

// parseHTML  循环解析template字符串
function parseHTML() {
  while (html) {
    let textEnd = html.indexOf("<");
    if (textEnd === 0) {
      const endTagMatch = html.match(endTag);
      if (endTagMatch) {
        advance(endTagMatch[0].length);
        parseEndTag(endTagMatch[1]);
        continue;
      }
      if (html.match(startTagOpen)) {
        const startTagMatch = parseStartTag();
        const element = {
          type: 1,
          tag: startTagMatch.tagName,
          lowerCasedTag: startTagMatch.tagName.toLowerCase(),
          attrsList: startTagMatch.attrs,
          attrsMap: makeAttrsMap(startTagMatch.attrs),
          parent: currentParent,
          children: [],
        };

        if (!root) {
          root = element;
        }

        if (currentParent) {
          currentParent.children.push(element);
        }

        stack.push(element);
        currentParent = element;
        continue;
      }
    } else {
      //...process text
      continue;
    }
  }
}

// parseStartTag 解析起始标签
function parseStartTag() {
  const start = html.match(startTagOpen);
  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index,
    };
    advance(start[0].length);

    let end, attr;
    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(attribute))
    ) {
      advance(attr[0].length);
      match.attrs.push({
        name: attr[1],
        value: attr[3],
      });
    }
    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
      match.end = index;
      return match;
    }
  }
}

function parseEndTag(tagName) {
  let pos;
  for (pos = stack.length - 1; pos >= 0; pos--) {
    if (stack[pos].lowerCasedTag === tagName.toLowerCase()) {
      break;
    }
  }

  if (pos >= 0) {
    stack.length = pos;
    currentParent = stack[pos];
  }
}
