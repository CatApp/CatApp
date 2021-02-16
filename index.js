// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");


/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
//var express = require('express');
var router = express.Router();

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "javascripts")));



/**
 * Routes Definitions
 */

router.get('/', function(req, res, next) {
  if (myDb.find({}))
  {
    
  }
  res.render('index', { title: 'Express' });
});


app.get("/", (req, res) => {
    res.render("index", { title: "CatApp" });
  });
app.get("/studentinfo", (req, res) => {
    res.render("studentinfo", { title: "studentinfo", studentProfile: { nickname: "TherapistName" } });
  });  
app.get("/filepond", (req, res) => {
    res.render("filepond", { title: "filepond", filepondProfile: { nickname: "Filepond!" } });
  });
app.get("/login", (req, res) => {
  res.render("login", { title: "login", loginProfile: { nickname: "Login!" } });
});


/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  module.exports = router;