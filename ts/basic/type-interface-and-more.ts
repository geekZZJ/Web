let str = "str";

// 联合类型
let numberOrString: string | number;

numberOrString = "str";
numberOrString = 1;

// 类型断言
function getLength(input: string | number): number {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const num = input as number;
    return num.toString().length;
  }
}

// type guard
function getLength2(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
