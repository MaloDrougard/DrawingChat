console.log("project start");

// the import /require
var express = require('express');
var path = require('path'); // path is core module of node, (no need of install)

var app = express(); 
var generator = require('./name-generator');

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

// set static path
app.use(express.static(path.join(__dirname, 'public')));


// set action on a GET request
app.get('/', function (req,res){
  res.render("index", {
      appTitle: "chat effect",
      username: generator.generateRandomName(),
      audios: [
          {name: "auteur-noir", src: "sounds/auteur-noir.mp3", key: "noir"},
          {name: "bbbbb", src: "fdsaffdsa", key: "fadfaf"}
          ]
  });
});

// set the server
var server = app.listen(3000, function() {
  console.log("Server started on port 3000;"); // call back function
}) ;

// formating function for the time prefix of a message
function timePrefix(date){
  return "" + date.getHours() + ":" +  date.getMinutes() + ":" + date.getSeconds() + ":";
}


// the core of the chat (manage socket connection)
var io = require('socket.io')(server)
io.on('connection' , function(socket) {
  
  console.log("new user connected"); 
  
  socket.on('push_new_message', function(data) {
    var date = new Date();
    console.log(date.toDateString() + ": New message recieved: val=" + data.message);
    console.log( "broadcast for " + data.username );
    // broadcast the message (remark the s of sockets)
    io.sockets.emit('fire_new_message',
        {message: data.message, date: timePrefix(date), username: data.username } );
  });
  
});
