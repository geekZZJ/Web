import {fromJS} from "immutable"

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl: "https://hbimg.huabanimg.com/64a1ca97d7e162355639d3d2fdf95511c77c4b9a30e1e-bZob2p_fw658/format/webp"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl: "https://hbimg.huabanimg.com/872b02eccfc415fcf87e2c5dc588c4e1638ea14f59c404-kwKUoB_fw658/format/webp"
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}