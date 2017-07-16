/**
 * Created by aayusharora on 7/8/17.
 */


var express = require('express');
var file = require('./file.js');
const fileUpload = require('express-fileupload');

var app = express();
app.use(fileUpload());
var todoList = [];
// file.getData(function(data){
//    console.log(JSON.parse(data));
// });
app.use('/', express.static('public_static'));
//
// file.getData(function(data){
//     if(data.length){
//         var obj = JSON.parse(data);
//         todoList = obj;
//     }
//
// });
//
// app.get('/add', function(req,res) {
//     todoList.push({task: req.query.todo});
//     file.main(todoList);
//     res.send("Sucessfully Written");
// });
//
// app.get('/getList',function(req,res){
//    file.getData(function(data){
//        res.send(data);
//    })
// });

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let textfile = req.files.file;
     console.log(textfile);
    // the uploaded file object
    textfile.mv('./music/'+textfile.name);
    res.send("File Uploaded");
});

app.listen(5000);
