let c = {};

c.getOffset = function (ele) {
  let mouse = {x: 0, y: 0};
  ele.addEventListener("mousemove", function (e) {
    let {x, y} = c.eventWrapper(e);
    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
};

c.eventWrapper = function (ev) {
  let {pageX, pageY, target} = ev;
  let {left, top} = target.getBoundingClientRect();
  return {x: pageX - left, y: pageY - top};
};


//角度转弧度
c.toRad = function (angle) {
  return angle * Math.PI / 180;
};


c.toAngle = function (rad) {
  return rad * 180 / Math.PI;
};
