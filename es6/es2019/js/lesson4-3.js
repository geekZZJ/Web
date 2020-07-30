/* for (let i = 0; i < 32; i++) {
  if (i < 10) {
    console.log(`0${i}`)
  } else {
    console.log(i)
  }
} */

for (let i = 0; i < 320; i++) {
  console.log(i.toString().padStart(3, '0'))
}
// toString().padEnd(5, '0')
