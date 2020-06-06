const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connection listening on " + connection.threadId);
});

module.exports = connection;