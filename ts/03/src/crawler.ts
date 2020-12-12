/*
 * @Author: zzj
 * @Date: 2020-12-11 22:04:34
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-12 12:24:14
 * @Description:
 */
import superagent from "superagent";

class Crawler {
  private url = "https://www.csdn.net/nav/web?spm=1000.2115.3001.4125";
  private rawHtml = "";
  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
  }
  constructor() {
    this.getRawHtml();
  }
}

const crawler = new Crawler();
