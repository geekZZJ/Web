var getPerson = function (person) {
    console.log(person.name);
};
var setPerson = function (person, name) {
    person.name = name;
};
var person = {
    name: "dell",
    gender: "male",
    say: function () {
        return "say hello";
    },
    teach: function () {
        return "teach";
    }
};
getPerson(person);
setPerson(person, "lee");
var User1 = /** @class */ (function () {
    function User1() {
        this.name = "dell";
    }
    User1.prototype.say = function () {
        return "";
    };
    return User1;
}());
var say = function (word) {
    return "say hi";
};
