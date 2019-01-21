console.log("project start")

// the import /require
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); // path is core module of node, (no need of install)

var app = express(); 

/*
// Create a middleware function
var logger = function(req, res, next) {

  console.log("middleware logger called");
  next(); 
  
}

// register the middleware into the app (we can specify a path or not)
app.use(logger); 
*/

// set the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set and serve static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req,res){
  res.send("hello world"); 
  
});

app.listen(3000, function() {
  console.log("Server started on port 3000;"); // call back function
}) ;