//正则表达式
{
    let regex = new RegExp('xyz','i')
    let regex2 = new RegExp(/xyz/i)

    console.log(regex.test('xyz123'),regex2.test('xyz123'))

    let regex3 = new RegExp(/xyz/ig,'i')
    console.log(regex3.flags)
}

{
    let s = 'bbb_bb_b'
    let a1 = /b+/g
    let a2 = /b+/y

    console.log('one',a1.exec(s),a2.exec(s))
    console.log('two',a1.exec(s),a2.exec(s))
    console.log('three',a1.exec(s),a2.exec(s))

    console.log(a1.sticky,a2.sticky)
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))
    console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'))
    // 大括号表示Unicode字符，只有加上u才能识别
    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true

    console.log(`\u{20BB7}`)
    console.log(/\u{20BB7}/u.test('𠮷')); // true
    // 点（.）字符不能识别码点大于0xFFFF的Unicode字符，必须加上u修饰符。
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); // false
    console.log('使用u字符',/^.$/u.test(s)); // true
}