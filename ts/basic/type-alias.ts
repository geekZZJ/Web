let sum: (x: number, y: number) => number;
const result1 = sum(1, 2);

type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
const result2 = sum2(2, 3);

type StrOrNumber = string | number;
let str3: StrOrNumber = "123";
str3 = 12;

interface IName {
  name: string;
}

type IPerson = IName & { age: number };
let person: IPerson = { name: "123", age: 11 };
