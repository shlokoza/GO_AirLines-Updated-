var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var objectId = require("mongodb").objectId;
const { mongo, Mongoose } = require('mongoose');

var url = "mongodb://localhost:27017/";


router.get('/', function(req, res, next) {
      res.render('index', { title: "Go-AiRlines",});
      
  });
  

router.get('/insert', (req, res, next) => {
  var item = {
    name: req.query.name,
    date: req.query.date,

  };

  MongoClient.connect(url, (err, db) =>{
    if(!err){
      var dbo = db.db("shlok_oza");
      dbo.collection("list").insertOne(item, (err, res) =>{
        if(!err){
          console.log("1 item inserted");
          console.log(item);
        }
      })
    }
  });
});



module.exports = router;
