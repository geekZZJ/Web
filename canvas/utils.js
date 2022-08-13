let c = {};

// 获取鼠标在元素上的坐标
c.getOffset = function (ele) {
  const mouse = { x: 0, y: 0 };
  ele.addEventListener("mousemove", function (e) {
    const { x, y } = c.eventWrapper(e);
    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
};

// 坐标系转换
c.eventWrapper = function (ev) {
  const { pageX, pageY, target } = ev;
  const { left, top } = target.getBoundingClientRect();
  return { x: pageX - left, y: pageY - top };
};

// 角度转弧度
c.toRad = function (angle) {
  return (angle * Math.PI) / 180;
};

// 弧度转角度
c.toAngle = function (rad) {
  return (rad * 180) / Math.PI;
};

// 生成随机数
c.rp = function (arr, int) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const num = Math.random() * (max - min) + min;
  return int ? Math.round(num) : num;
};

// 返回随机颜色
c.createColor = function () {
  return `rgb(${c.rp([55, 255], true)},${c.rp([55, 255], true)},${c.rp(
    [55, 255],
    true
  )})`;
};

// 矩形之间的碰撞检测
c.rectDuang = function (rect1, rect2) {
  const { x: x1, y: y1, w: w1, h: h1 } = rect1;
  const { x: x2, y: y2, w: w2, h: h2 } = rect2;
  return x1 + w1 >= x2 && x1 <= x2 + w2 && y1 + h1 >= y2 && y1 <= y2 + h2;
};

// 求两点间的距离
c.getDist = function (x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

// 对小球进行边界反弹处理
c.checkBallBounce = function (ball, W, H, bounce) {
  if (ball.x - ball.r <= 0) {
    ball.x = ball.r;
    ball.vx *= bounce;
  } else if (ball.x + ball.r >= W) {
    ball.x = W - ball.r;
    ball.vx *= bounce;
  }
  if (ball.y - ball.r <= 0) {
    ball.y = ball.r;
    ball.vy *= bounce;
  } else if (ball.y + ball.r >= H) {
    ball.y = H - ball.r;
    ball.vy *= bounce;
  }
};
