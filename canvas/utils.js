let c = {};

// 获取鼠标在元素上的坐标
c.getOffset = function (ele) {
  let mouse = { x: 0, y: 0 };
  ele.addEventListener("mousemove", function (e) {
    let { x, y } = c.eventWrapper(e);
    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
};

// 坐标系转换
c.eventWrapper = function (ev) {
  let { pageX, pageY, target } = ev;
  let { left, top } = target.getBoundingClientRect();
  return { x: pageX - left, y: pageY - top };
};

//角度转弧度
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
