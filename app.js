var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk("localhost:27017/go_air");
var expressHbs = require('express-handlebars');
var indexRouter = require('./routes/index');
var FlightDetails = require('./routes/flightDetails');
var About = require("./routes/about");


var app = express();

app.use(express.static(__dirname));

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout : 'layout', extname: '.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  req.db = db;
  next();
 });
 

app.use('/', indexRouter);
app.use('/flightDetails', FlightDetails);
app.use('/about', About);


app.use("/static", express.static("./javascripts/addData"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
