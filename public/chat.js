$(function(){
  var socket = io.connect('http://localhost:3000')
  
  var submitBtn = $("#submitBtn");
  var textInput = $("#textInput");
  var chatRoom = $("#room"); 
  
  
  submitBtn.click(function () {
    console.log("Submit btn clicked with value: " + textInput.text()); 
    socket.emit('push_new_message', {message: textInput.text() } );   
  });
  
  socket.on('fire_new_message', function (data) {
    console.log("new message recived" + data.message);
    chatRoom.append("<p>" + data.message + "</p>");
  
    ellipse(100, 0, 80, 80);
    
  });
  
  
  
}); 