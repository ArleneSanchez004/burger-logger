const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(name, cb){
        //insert into burgers table the burgername and whether it is devoured or not with the name and false values.
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },
    updateOne: function(id, cb){
        //the condition is the id so we can target that burger to update to devoured
        let condition = "id=" + id;
        //the object for colsVals is the 2nd argument, we are only updating the devoured property.
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb)
    }

};



module.exports = burger;