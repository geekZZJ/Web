const s = 'aaa_aa_a'
const r1 = /a+/g
const r2 = /a+/y

console.log(r1.exec(s)) // aaa
console.log(r2.exec(s))

console.log(r1.exec(s))
console.log(r2.exec(s))
