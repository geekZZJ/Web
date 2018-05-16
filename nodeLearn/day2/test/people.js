function peopele(name,sex,age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

peopele.prototype = {
    sayHello : function () {
        console.log(this.name + this.sex + this.age);
    }
}

module.exports = peopele;