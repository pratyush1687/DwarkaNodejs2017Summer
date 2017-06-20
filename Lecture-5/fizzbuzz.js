/**
 * Created by aayusharora on 6/19/17.
 */
"use strict";
var test = document.getElementById('test');
var time = document.getElementById('time');
var input = document.getElementById('input');
var button = document.getElementById('get');

var x = "hello";
button.onclick = function() {

    var inputval = input.value;
    var start = Date.now();
    for( var i=0; i< inputval; i++) {
        test.innerHTML += '<li>' + i + '</li>';

    }

    var elapsed = Date.now() - start;
    time.innerHTML = elapsed;
};
console.log(x);

