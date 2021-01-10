/*
 * @Author: zzj
 * @Date: 2021-01-10 21:46:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 21:49:07
 * @Description:
 */
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

router.get("/getData", (req: Request, res: Response) => {
  res.send("bye world");
});

export default router;
