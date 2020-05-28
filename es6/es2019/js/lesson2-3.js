/**
 * @name: lesson2-3
 * @author: 张中俊
 * @date: 2020/5/26 9:17
 * @description：lesson2-3
 * @update: 2020/5/26 9:17
 */
/*
let Animal = function (type) {
  this.type = type
  this.eat = function () {
    
  }
}*/

/*class Animal {
  constructor(type){
    this.type = type
  }
  eat(){
    console.log('I am eat food')
  }
}

let dog = new Animal('dog')
console.log(dog)
dog.eat()*/

/*
class Animal {
  constructor(type) {
    this.type = type
  }

  get age() {
    return 4
  }

  set age(val) {
    this.realAge = val
  }

  eat() {
    console.log("I am eat food")
  }
}

let dog = new Animal("dog")
console.log(dog.age)
dog.age = 5
console.log(dog.realAge)*/

/*
class Animal {
  constructor(type) {
    this.type = type
  }

  eat() {
    console.log("I am eat food")
  }

  static walk() {
    console.log("walking")
  }
}

let dog = new Animal("dog")
dog.eat()
Animal.walk()*/

class Animal {
  constructor(type) {
    this.type = type
  }

  eat() {
    console.log("I am eat food")
  }

  static walk() {
    console.log("walking")
  }
}

class Dog extends Animal {
  constructor(type, age) {
    super(type)
    this.age = age
  }
}

let dog = new Dog("dog", 12)
console.log(dog)
dog.eat()
Dog.walk()