// 范型
function echo<T>(arg: T): T {
  return arg;
}

const result = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res = swap([123, "456"]);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("123");
const obj = echoWithLength({ length: 123 });
const arr2 = echoWithLength([1, 2, 3]);