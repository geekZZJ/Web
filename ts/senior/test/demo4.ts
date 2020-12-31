/*
 * @Author: zzj
 * @Date: 2020-12-31 14:18:22
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-31 15:00:53
 * @Description:类中使用泛型
 */

// interface Item {
//   name: string;
// }

class DataManager<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

// const data = new DataManager(["1", 1]);
// data.getItem(0);

// const data = new DataManager([{ name: "A" }]);

// const data = new DataManager<string>([]);
