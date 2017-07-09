/**
 * Created by aayusharora on 7/9/17.
 */
var express = require('express');
var sql = require('./sql.js');
var app = express();
var bodyParser = require('body-parser');

app.use('/',express.static('public_static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todolist = [{"task":1},{"task":2},{"task":3}];

app.get('/todos/get',function(req,res) {
    sql.get(function(data) {
        res.send(data);
    });

});

app.post('/todos/post',function(req,res) {
    console.log(req.body)
    sql.update(req.body.id,req.body.done,function(data){
        res.send(data);
    });

});

app.listen(5000, function(){
   console.log("Server is listening at port 5000");
});