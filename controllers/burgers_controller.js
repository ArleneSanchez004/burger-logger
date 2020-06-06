const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

//GET
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req,res) => {
    burger.selectAll(data => {
        res.render("index", {burgerData: data});
    });
});

//POST
router.post("/burgers/insert", (req, res) => {
    burger.insertOne(req.body.burger_name, result => {
        console.log(result);
        res.redirect("/");
    });
});

//PUT
router.put("/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, result => {
        console.log(result);
        res.end();
    });
});

module.exports = router;