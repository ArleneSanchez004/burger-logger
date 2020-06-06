const connection = require("./connection");

const orm = {
    selectAll: function(table, cb){
        const myQuery = "SELECT * FROM " + table + ";";
        console.log(myQuery);
        connection.query(myQuery, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },//end selectAll
    insertOne: function(table, columns, values, cb){
        const myQuery = "INSERT INTO " + table + "(" + columns + ") " + VALUES + " (" + values + ");";
        console.log(myQuery);
        connection.query(myQuery, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },//end insertOne
    updateOne: function(table, colsVals, condition, cb){
        const myQuery = "UPDATE " + table + " SET " + colsVals + " WHERE " + condition + ";";
        console.log(myQuery);
        connection.query(myQuery, (err, res) => {
            if (err) throw err;
            cb(result);
        })
    }//end updateOne
}

module.exports = orm;