/*
 * @Author: zzj
 * @Date: 2021-05-15 15:53:03
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-19 22:14:16
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
        status: 200,
        data: Array(10).fill(req.query.value),
      });
    }, 1000);
  },
};
