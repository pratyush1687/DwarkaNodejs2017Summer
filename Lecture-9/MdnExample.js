/**
 * Created by aayusharora on 6/28/17.
 */


function Foo(who) {
    this.me = who;
}

Foo.prototype.setItem = function () {
  return "I am " + this.me;
};

Foo.prototype.getItem = function () {
    return "I am not" + this.me;
}

var a1 = new Foo("a1+a3");
var a2 = new Foo("a2");

a2.speak = function () {
    console.log("Hello" + this.identify());
};

console.log(a1.__proto__ === a2.__proto__);

console.log(a1.constructor === Foo);
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === a2.__proto__);