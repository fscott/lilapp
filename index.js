var express=require('express');
const db = require('./db/db')

var app=express();

var server=app.listen(3030,listening);

function listening(){
    var connection = db();
    connection.query('SELECT * from scotts', function(error,results,fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
        }
    });
    console.log("listening..");
}