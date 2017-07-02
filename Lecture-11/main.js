/**
 * Created by aayusharora on 7/2/17.
 */

$(document).ready(function(){
    // console.log("Document is ready now");
    var getText = $('#getText'); //inputbox
    var btn = $('#enter');  //button
    var output = $('#output');

     btn.click(function(){

         console.log($(this));

         output.append( '<li>'+ getText.val() + '</li>');  // .text()

     })
});

// console.log("Document is not ready");