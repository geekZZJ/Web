class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
    }

    sayHi() {
        console.log(`姓名 ${this.name}，学号 ${this.number}`)
    }
}

//通过类声明对象/实例
const xiaoluo = new Student('xiaoluo', 246)
console.log(xiaoluo.name)
console.log(xiaoluo.number)
xiaoluo.sayHi()