/*
 * @Author: zzj
 * @Date: 2021-06-21 22:22:21
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-26 15:56:33
 * @Description:
 */
export default {
  'POST /api/commons/cities': (req, res) => {
    res.json({
      status: 200,
      data: [
        { label: '杭州', value: '1001' },
        { label: '苏州', value: '1002' },
      ],
    });
  },
};
