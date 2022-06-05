// 范型
function echo<T>(arg: T): T {
  return arg;
}

const result = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res = swap([123, '456']); 