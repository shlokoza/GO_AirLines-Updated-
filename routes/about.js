var express = require('express');
var router = express.Router();
var mongodb  = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var monk = require("monk");
//var db = monk("localhost:27017/shlok_oza");

var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
    res.render('about');
    
});

module.exports = router;