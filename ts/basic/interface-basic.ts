interface Person {
  readonly id: number;
  name: string;
  // 加问号表示该属性可选
  age?: number;
}

let stu: Person = {
  id: 1,
  name: "zzj",
  age: 20,
};
