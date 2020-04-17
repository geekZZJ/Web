//父类
class People {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} eat something`)
    }
}

//子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }

    sayHi() {
        console.log(`姓名${this.name} 学号 ${this.number}`)
    }
}

//子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }

    teach() {
        console.log(`${this.name}教${this.major}`)
    }
}

//实例
const xiaoluo = new Student('小罗', 20)
console.log(xiaoluo.name)
console.log(xiaoluo.number)
xiaoluo.sayHi()
xiaoluo.eat()

//实例
const wang = new Teacher('王老师', '数学')
console.log(wang.name)
console.log(wang.major)
wang.teach()