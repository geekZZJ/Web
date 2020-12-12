/*
 * @Author: zzj
 * @Date: 2020-12-11 22:04:34
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-12 16:24:18
 * @Description:
 */
import fs from "fs";
import path from "path";
import superagent from "superagent";
import cheerio from "cheerio";

interface Blog {
  title: string;
  count: number;
}

interface BlogResult {
  time: number;
  data: Blog[];
}

interface Content {
  [propName: number]: Blog[];
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
    return {
      time: new Date().getTime(),
      data: blogInfos,
    };
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  generateJsonContent(blogInfo: BlogResult) {
    const filePath = path.resolve(__dirname, "../data/blog.json");
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[blogInfo.time] = blogInfo.data;
    return fileContent;
  }

  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, "../data/blog.json");
    const html = await this.getRawHtml();
    const blogInfo = await this.getBlogInfo(html);
    const fileContent = this.generateJsonContent(blogInfo);
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crawler = new Crawler();
