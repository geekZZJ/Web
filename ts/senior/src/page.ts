/*
 * @Author: zzj
 * @Date: 2020-12-31 15:03:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-31 16:29:50
 * @Description:
 */

namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is Header";
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is Content";
      document.body.appendChild(elem);
    }
  }

  export class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is Footer";
      document.body.appendChild(elem);
    }
  }

  class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
