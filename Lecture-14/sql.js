/**
 * Created by aayusharora on 7/9/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host     : 'localhost',
    user     : 'newuser',
    password : 'newpassword',
    database : 'main'
}

function getTodos(cb) {
    var connection = mysql.createConnection(dbconfig);
    console.log("SqlDB Connected");

    connection.connect();
    connection.query('SELECT * FROM todos',function(error,rows,fields){
        if(error) throw error;
        cb(rows);
    })

}

function updateTodos(id,done,cb) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('UPDATE todos SET done='+ done + ' where id='+ id,function(error,rows,fields){
        if(error) throw error;
        console.log("Updated" + id);
        connection.query('SELECT * FROM todos',function(error,rows,fields){
            if(error) throw error;
            cb(rows);
        })



    })



}

module.exports = {
    get: getTodos,
    update: updateTodos
};

