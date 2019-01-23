
var temp = null;

$(function(){
    // use ip for LAN usage
  var socket = io.connect('http://192.168.0.57:3000') ;
  
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
    if ( data.message == "triangle" ){
        myTriangle();
    }
    if (data.message == "noir"){
        $("#noir").trigger("play" );
    }
    if(data.message == "noir stop"){
        $("#noir").trigger("pause" );
    }


    
  });
  
  
  
}); 
