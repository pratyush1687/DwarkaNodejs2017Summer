/**
 * Created by aayusharora on 6/23/17.
 */

'use strict';
//  Immediately Invoked Function Definition

(function () {
    function public1() {
        console.log("I am inside IIFE");
    }

    function public2() {
        console.log("I am inside IIFE");
    }

    function private1() {
        console.log("I am private1");
    }

    private1();
    private2();

    function private2() {
        console.log("I am private2");
    }

    var functions = {
        "public1": public1,
        "public2": public2,
        "x": 5
    }

    function getToWindow() {
        return functions;
    }

    window.main = getToWindow;
})();

console.log(main());
