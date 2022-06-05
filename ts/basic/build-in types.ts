const a: Array<number> = [1, 2, 3];

// build-in object
Math.pow(2, 2);

// DOM and BOM
let body = document.body;

// utility types
interface IPerson {
  name: string;
  age: number;
}

let stu: IPerson = {
  name: "张三",
  age: 20,
};

type IPartial = Partial<IPerson>;
let stu2: IPartial = {
  name: "张三",
};
