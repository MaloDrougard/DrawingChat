console.log("project start")

// the import /require
var express = require('express');
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



// Set the middleware view engine
app.set('view engine', 'ejs'); 
// dir that contains the view templates
app.set('views', path.join(__dirname, 'views')); 

// set and serve static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req,res){
  res.render("index", {appTitle: "chat effect"} ); 
});


var server = app.listen(3000, function() {
  console.log("Server started on port 3000;"); // call back function
}) ;

var io = require('socket.io')(server)
io.on('connection' , function(socket) {
  console.log("new user connected"); 
  
  socket.on('push_new_message', function(data) {
    console.log("new message recived: val=" + data.message); 
    // broadcast the message (remark the s of sockets)
    io.sockets.emit('fire_new_message', {message: data.message} );
  });
  
});