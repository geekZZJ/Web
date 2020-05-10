// 页面中有个板块 需要多张图片加载完之后才能进行展示

const loadImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.src = src

    img.onload = () => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}

const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589096817677&di=ea99ba057775b4fa2c0c1d372bb8c947&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F52%2F98%2F19300001226280131833989819530.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589096817677&di=9ea1819dcaabc86abc6b9f9e0139db8e&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F096%2F755%2F666%2F49611e232c4646bcbfdca563a39b15ab.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589096817676&di=55631c48a93597fb78041b6ab03e498c&imgtype=0&src=http%3A%2F%2F2f.zol-img.com.cn%2Fproduct%2F153%2F509%2Fce7f5KSOeEcC6.jpg'
]

const promises = imgs.map((src) => {
  return loadImg(src)
})

Promise.all(promises).then((arr) => {
  console.log(arr)
  arr.forEach((img) => {
    document.body.appendChild(img)
  })
}).catch(e=>{
	console.log(e)
})
