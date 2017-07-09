/**
 * Created by aayusharora on 7/9/17.
 */

$(function() {
      $('#btn').click(function(){
          // $.get({url: 'todos/get',success: function(data){
          //     console.log(data);
          // }})

          $.post( "todos/post", {id:1 ,done: 13},function(data){
              console.log(data);
          })


      })

});