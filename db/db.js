var mysql = require('mysql');
var options = require('../conf');

var db_login = {
        host: options.db.host,
        database: options.db.database,
        user: options.db.user,
        password: options.db.password
};

var db = null;
module.exports = function (){
    if (!db) {
        db = connection = mysql.createConnection({
            host : db_login.host,
            database: db_login.database,
            user: db_login.user,
            password: db_login.password
        });
    }
    return db;
};
