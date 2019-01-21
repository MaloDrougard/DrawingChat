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

var users = [
  {
    id: 1,
    name: "prout",
    action: "a1"
  },
   {
    id: 2,
    name: "dsfa",
    action: "a2"
  },
   {
    id: 3,
    name: "proutuoupt",
    action: "a3"
  },
   {
    id: 4,
    name: "proufdat",
    action: "a4"
  }
]


// Set the middleware view engine
app.set('view engine', 'ejs'); 
// dir that contains the view templates
app.set('views', path.join(__dirname, 'views')); 

// set the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set and serve static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req,res){
  res.render("index",{users: users}  ); 
});

app.post('/users/add', function(req,res) {
  var newUser = {
    id: req.body.id,
    name: req.body.name,
    action: req.body.action
  }
  users.push(newUser); 
});


app.listen(3000, function() {
  console.log("Server started on port 3000;"); // call back function
}) ;