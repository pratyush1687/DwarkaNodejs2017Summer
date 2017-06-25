/**
 * Created by aayusharora on 6/25/17.
 */

var bar = "Global bar";

var x = {
    "foo": function foo() {
              console.log(this);
             } ,
    "bar": "bar"
};



x.foo();