/*
 * @Author: zzj
 * @Date: 2020-12-02 17:10:33
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-08 22:14:50
 * @Description:
 */
// interface和type类似，但不完全一致
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

const getPerson = (person: Person): void => {
  console.log(person.name);
};

const setPerson = (person: Teacher, name: string): void => {
  person.name = name;
};

interface sayHi {
  (word: string): string;
}

const person = {
  name: "dell",
  gender: "male",
  say() {
    return "say hello";
  },
  teach() {
    return "teach";
  },
};

getPerson(person);

setPerson(person, "lee");

class User implements Person {
  name: "dell";
  say() {
    return "";
  }
}

const say: sayHi = (word: string) => {
  return "say hi";
};
