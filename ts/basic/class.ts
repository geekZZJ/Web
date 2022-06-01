class Animal {
  readonly name: string;
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("snake");
console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

class Cat extends Animal {
  static categories = ["mammal"];
  constructor(name) {
    super(name);
  }
  run() {
    return `Meow, ${super.run()}`;
  }
}
