
var temp = null;

$(function(){
  var socket = io.connect('http://localhost:3000')
  
  var submitBtn = $("#submitBtn");
  var textInput = $("#textInput");
  var chatRoom = $("#room");


  function emitNewMessage(){
      var data = {message: textInput.val() };
      textInput.val(""); // delete the text
      console.log("New message send to the server with value: " +  JSON.stringify(data) );
      socket.emit('push_new_message', data );
  }

  submitBtn.click(function () {
       emitNewMessage();
  });

  textInput.on('keydown', function(e) {
        if(e.keyCode == 13)
        {
            e.preventDefault(); // to avoid the new line in the text box
            emitNewMessage();
        }
    });


  
  socket.on('fire_new_message', function (data) {
    console.log("new message recived" + data.message);
    temp = data.date;
    chatRoom.prepend("<p>" + data.date + "   " + data.message + "</p>");

    ellipse(100, 0, 80, 80);
    
  });
  
  
  
}); 
