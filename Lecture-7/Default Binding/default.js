/**
 * Created by aayusharora on 6/25/17.
 */


function global() {
    console.log(this.foo);
    console.log("I am global");

}

global();



// function parent () {
//     console.log(this)
//     function child1() {
//         console.log(this);
//     }
//     function child2() {
//         console.log(this);
//     }
//
//     child1();
//     child2();
// }
//
// parent();