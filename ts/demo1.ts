// type Point = { x: number, y: number };
interface Point {
  x: number,
  y: number
}

function demo(data: Point) {
  console.log('TS');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

demo({x: 1, y: 2});
