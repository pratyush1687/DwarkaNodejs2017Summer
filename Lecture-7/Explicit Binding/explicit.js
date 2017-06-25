/**
 * Created by aayusharora on 6/25/17.
 */


function hello(myvalue) {
    console.log(this.bar);
    console.log(myvalue);
}

var obj1 = {
    bar: "bar of object1"
};

var obj2 = {
    bar: "bar of object2"
};


hello.call(obj1,"hello");
hello.call(obj2,"bye");