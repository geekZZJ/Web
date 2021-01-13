/*
 * @Author: zzj
 * @Date: 2021-01-10 21:46:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-13 22:03:07
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

router.post("/getData", (req: RequestWithBody, res: Response) => {
  const { password } = req.body;
  if (password === "123") {
    res.send("bye world");
  } else {
    res.send(`${req.teacherName} error`);
  }
});

export default router;
