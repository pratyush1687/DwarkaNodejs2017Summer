/**
 * Created by aayusharora on 7/8/17.
 */

var express = require('express');
var app = express();
var todoList = [];

app.use(express.static('public_static'));

app.get('/postData',function(req,res) {

        todoList.push(req.query.todo);
        res.send(todoList);


});

app.get('/getData',function(req,res) {
    res.send(todoList);
});

app.listen(5000);