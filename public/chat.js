
$(function(){
    // use ip for LAN usage
  var socket = io.connect('http://localhost:3000') ;
  
  let submitBtn = $("#submitBtn");
  let textInput = $("#textInput");
  let chatRoom = $("#room");
  let username = $("#userField").text();

  function emitNewMessage(){
      let data = {message: textInput.val(), username: username };
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
    chatRoom.prepend("<p><span class='messagePrefix'>" + data.username + ": </span><span>" + data.message + "</span></p>");
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
