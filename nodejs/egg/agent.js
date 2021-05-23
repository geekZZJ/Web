/*
 * @Author: zzj
 * @Date: 2021-05-23 14:32:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 14:41:44
 * @Description:
 */
module.exports = (agent) => {
  // 这里我们使用messenger对象来收发消息
  // 并且是在egg启动之后才能收发消息
  agent.messenger.on("egg-ready", () => {
    const data = { info: "agent send msg" };
    agent.messenger.sendToApp("agentAction", data);
  });
};
