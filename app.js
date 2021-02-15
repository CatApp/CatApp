var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

function getMySQLConnection() {
	return mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'Pass12ab17++',
	  database : 'MYSQL80'
	});
}

app.get('/student', function(req, res) {
	var studentList = [];
  
	  // Connect to MySQL database.
	  var connection = getMySQLConnection();
	  connection.connect();
  
	  // Do the query to get data.
	  connection.query('SELECT * FROM student', function(err, rows, fields) {
			if (err) {
				res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			} else {
				// Loop check on each row
				for (var i = 0; i < rows.length; i++) {
  
					// Create an object to save current row's data
					var student = {
						'SID':rows[i].SID,
						'TID':rows[i].TID,
						'Username':rows[i].Username,
						'Last Reviewed':rows[i].LastReviewed
					}
					// Add object into array
					studentList.push(student);
			}
  
			// Render index.pug page using array 
			res.render('index', {"studentList": studentList});
			}
	  });
  
	  // Close the MySQL connection
	  connection.end();
	  
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

