/**
 * Created by aayusharora on 7/8/17.
 */

$(function () {
    var todoArray = [];
    var output = $('#output');
    var url = '/postData?todo=';

    $('#btn').click(function () {
        var val = $('#inp').val();
        $.ajax({url: url+ val, success: function(result){
           todoArray.push(result);
           refresh(todoArray);
        }});

    });
    function refresh(todoArray) {
        output.html(todoArray.pop()) ;
        todoArray = [];
    }

});