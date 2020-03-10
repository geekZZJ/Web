/*function MathHandle(x,y) {
    this.x = x
    this.y = y
}

MathHandle.prototype.add = function () {
    return this.x + this.y
}
var m = new MathHandle(1,2)
// console.log(m.add())

typeof MathHandle //function
MathHandle.prototype.constructor === MathHandle //true
m.__proto__ === MathHandle.prototype //true*/

/*//动物
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}

//狗
function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}

//绑定原型，实现继承
Dog.prototype = new Animal()
//哈士奇
var hashiqi = new Dog()
hashiqi.bark()
hashiqi.eat()*/