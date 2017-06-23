/**
 * Created by aayusharora on 6/23/17.
 */


'use strict'
var todoList = [];

window.onload = function () {
    var inputValue = document.getElementById('getValue'); //input
    var addTodo = document.getElementById('done'); // button
    var outputValue = document.getElementById('output'); //output

    addTodo.onclick = function () {
        var value = inputValue.value;
        outputValue.innerHTML = '';
        todoList.push({
            "task": value,
            "done": false
        });


        for(var i=0; i<todoList.length;i++) {


            outputValue.innerHTML += '<li  onclick="strikeThrough(this)"'
                                     + 'id='+ i + '>' + todoList[i].task +
                                     '</li>';
        }


    }


    console.log(todoList);

};

function strikeThrough(el) {
    console.log(el);
    todoList[el.id].done =
  el.style.textDecoration = 'line-through';

}