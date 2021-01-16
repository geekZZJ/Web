/*
 * @Author: zzj
 * @Date: 2021-01-10 21:46:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-16 15:08:17
 * @Description:
 */
import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
  } else {
    res.send(`
    <html>
      <body>
        <a href="/logout">退出</a>
      </body>
    </html>
  `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.redirect("/");
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.send("已经登录过");
  } else {
    if (password === "123" && req.session) {
      req.session.login = true;
      res.send("登录成功");
    } else {
      res.send(`登录失败`);
    }
  }
});

export default router;
