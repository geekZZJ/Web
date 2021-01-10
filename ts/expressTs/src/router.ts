/*
 * @Author: zzj
 * @Date: 2021-01-10 21:46:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 22:06:53
 * @Description:
 */
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getData">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
});

router.post("/getData", (req: Request, res: Response) => {
  console.log(req.body);
  if (req.body.password === "123") {
    res.send("bye world");
  } else {
    res.send("error");
  }
});

export default router;
