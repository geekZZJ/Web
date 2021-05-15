/*
 * @Author: zzj
 * @Date: 2021-05-15 15:53:03
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 18:11:36
 * @Description:
 */
export default {
  'GET /api/getLists': {
    lists: ['a', 'b', 'c'],
  },
  'GET /api/getListsAsync': (req, res) => {
    // console.log(req);
    setTimeout(() => {
      res.json({
        lists: Array(10).fill(req.query.value),
      });
    }, 1000);
  },
};
