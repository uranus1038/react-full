const mysql = require("mysql");

const db = mysql.createConnection(
    {
        user: "root" ,
        host: "localhost",
        password : "" ,
        database : "testdb"
    }
)

module.exports = db ; 