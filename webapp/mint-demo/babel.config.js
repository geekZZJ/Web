/*
 * @Author: zzj
 * @Date: 2021-03-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-30 17:09:42
 * @Description:
 */
module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "mint-ui",
        style: true,
      },
      ,
    ],
  ],
};
