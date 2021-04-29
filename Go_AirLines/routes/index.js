var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/";


router.get('/', function(req, res, next) {
      res.render('index', { title: "Go-AiRlines"});
      
});

module.exports = router;
