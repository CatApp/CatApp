var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var app = express();
const port = process.env.PORT || "8000";
console.log("app test 1")


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("app test 2")

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


/*var testObj = {SID:3, TID:1, Fname:"L",Lname:"CORFIELD"};

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv:admin:CyyuBE7j1c8BlVx2@cluster0.wbsei.mongodb.net/CatApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true});
client.connect(err => {
  // perform actions on the collection object
  const collection = client.db("test").collection("Student");
  console.dir(collection);
  collection.insertOne(testObj);
  client.close();
});*/

var MongoClient = require('mongodb').MongoClient

//mongodb://localhost:27017
//mongodb+srv://admin:CyyuBE7j1c8BlVx2@cluster0.wbsei.mongodb.net/test

MongoClient.connect('mongodb+srv://admin:CyyuBE7j1c8BlVx2@cluster0.wbsei.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {

  app.set('myDb', client.db('CatApp'));

})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;

console.log("app test 3")

