/**
 * Created by aayusharora on 6/30/17.
 */
var x ={};
var z = (function(y) {


   var blur = function () {
      console.log("Hello");
   };


   y.main = blur;

})(x);

console.log(x.main());

