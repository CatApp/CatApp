var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log("TESTTESTTEST")
var testObj = {SID:3, TID:1, Fname:"L",Lname:"CORFIELD"}

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv:admin:CyyuBE7j1c8BlVx2@cluster0.wbsei.mongodb.net/CatApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true});
client.connect(err => {
  const collection = client.db("dev").collection("Student");
  // perform actions on the collection object

	collection.insertOne(testObj);
  client.close();
});

module.exports = router;
