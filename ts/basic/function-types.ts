const add = (x: number, y: number, z?: number): number => {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};

add(1, 2);
add(1, 2, 3);

// interface可以描述函数类型
interface ISum {
  (x: number, y: number, z?: number): number;
}

let add2: ISum = add;
