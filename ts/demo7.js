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
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.say = function () {
        return "";
    };
    return User;
}());
var say = function (word) {
    return "say hi";
};
