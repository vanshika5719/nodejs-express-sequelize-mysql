const mysql = require('mysql2');

const dbconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Password123',
    database:'movies',
    port:3306
});

module.exports = dbconnection;