var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var db = req.db;
        const searched = req.query.search;
        var collection = db.get('flights');
        if(searched){
            collection.find({location: {$regex: '^' + searched, $options: 'i'}}, (err, doc) => {
                if(!err){
                    res.render('flightDetails',{"flights": doc});
                    
                }

                else{
                    console.log("error fetching data");
                }
            })
            
        }

        else{
            collection.find({}, (err, doc) => {
                if(!err){
                    res.render('flightDetails', {"flights": doc});
                    
                }

                else{
                    console.log("error fetching data");
                }
            })
        }
})

module.exports = router;



