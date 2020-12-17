/*
 * @Author: zzj
 * @Date: 2020-12-12 18:17:00
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 14:07:23
 * @Description:
 */
import fs from "fs";
import cheerio from "cheerio";
import { Analyzer } from "./crawler";

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

export default class Jianshu implements Analyzer {
  private static instance: Jianshu;

  static getInstance() {
    if (!Jianshu.instance) {
      Jianshu.instance = new Jianshu();
    }
    return Jianshu.instance;
  }

  private getBlogInfo(html: string) {
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

  private generateJsonContent(blogInfo: BlogResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[blogInfo.time] = blogInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const blogInfo = this.getBlogInfo(html);
    const fileContent = this.generateJsonContent(blogInfo, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}
