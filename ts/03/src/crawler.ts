/*
 * @Author: zzj
 * @Date: 2020-12-11 22:04:34
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-12 15:12:00
 * @Description:
 */
import superagent from "superagent";
import cheerio from "cheerio";

interface Blog {
  title: string;
  count: number;
}

class Crawler {
  private url = "https://www.jianshu.com/";

  getBlogInfo(html: string) {
    const $ = cheerio.load(html);
    const blogItems = $(".content");
    const blogInfos: Blog[] = [];
    blogItems.map((index, element) => {
      const title = $(element).find(".title").text().trim();
      const count = parseInt($(element).find(".meta span").eq(1).text());
      blogInfos.push({ title, count });
    });
    const result = {
      time: new Date().getTime(),
      data: blogInfos,
    };
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.getBlogInfo(result.text);
  }
  constructor() {
    this.getRawHtml();
  }
}

const crawler = new Crawler();
