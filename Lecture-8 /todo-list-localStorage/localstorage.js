/**
 * Created by aayusharora on 6/22/17.
 */
var todoList = (localStorage.getItem('todo'));
    if(!todoList) {
        todoList = [];
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
 window.onload = function () {

     var clear=document.getElementById("clear");//clear button
    var todo = document.getElementById('todo'); //input
    var add = document.getElementById('add'); // button
    var output = document.getElementById('output'); //div

    refreshList();


    add.onclick = function () {

        // creating an input box;
        var task = todo.value;
        var wtodo = {
            "task": task,
            "done": "false"
        };

        todoList.push(wtodo);
        localStorage.setItem('todo', JSON.stringify(todoList));
        refreshList();
    };



        function refreshList () {

            todoList = JSON.parse(localStorage.getItem('todo'));
            var cont = '';

<<<<<<< HEAD
            for( var i=1; i< todoList.length; i++) {
                // var todo = '<input  class="checkstyle" type="text"' + ' value= ' + todoList[i] + '/>' ;
=======
            for( var i=0; i< todoList.length; i++) {
                var todo = '<input  class="checkstyle" type="text"' + ' value= ' + todoList[i] + '/>' ;
>>>>>>> 7f20955080f38f8e0b44335cae2708648b03026e
                cont = cont + '<input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox"/>' + '<input type="text"' + ' value= ' +
                       todoList[i].task + '>' + '</br>';
            }
            output.innerHTML = cont;

        }

     clear.onclick=function() {
         localStorage.clear();
         output.innerHTML='';
         todoList=[];
     };

    };

    function setDone(el) {
        todoList[el.id].done = el.checked;
        localStorage.setItem('todo',JSON.stringify(todoList));
<<<<<<< HEAD
    };

=======
    }
>>>>>>> 7f20955080f38f8e0b44335cae2708648b03026e
