var express = require('express');
var router = express.Router();

var Todo = require("../models/todoModel");


router.get("/todos", function(req, res, next) {
    Todo.find(function(err, arrayOfItems) {
        res.render("index", {
            item: arrayOfItems
        });
        console.log(arrayOfItems);
    })

});

module.exports = router;