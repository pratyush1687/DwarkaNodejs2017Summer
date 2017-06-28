/**
 * Created by aayusharora on 6/22/17.
 */


window.onload = function () {

  var btn = document.getElementById('add');
  var task = document.getElementById('todo');
  var append = document.getElementById('append');
  var button = {};

  btn.onclick = function () {
      append.innerHTML +=  '<li onclick="window.strikeThrough(this)">'+ task.value  + '</li>';
  };

  window.strikeThrough  = function (el) {
      el.style.textDecoration = 'line-through';
  }
};