/**
 * Created by aayusharora on 6/23/17.
 */



var nam = function() {
    console.log("I am also in Global Scope");
};

 function hello() {
     console.log("Global scope");
 }


var obj = {
     x: hello,
     y: "Execute"
}

var x= 14;
function parent() {
     var x = 12;
     var y = "";
     function child1(child2) {

         child2();
         console.log(y);

     }
     function child2() {
         y=13;
         console.log(x);
     }

     child1(child2);

}

parent();
