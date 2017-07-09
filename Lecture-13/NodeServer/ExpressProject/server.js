/**
 * Created by aayusharora on 7/7/17.
 */

var express = require('express');

var app = express();
var port = 5000;

app.use('/',express.static('public_static'));

app.get('/getData',function (req,res) {
   res.send("Hello World!!")
});
//
// app.get('/',function (req,res) {
//     res.send("Hello World!!")
// });

app.listen(port, function(){
    console.log("app is listening on port 5000");
});