$(function(){
  var socket = io.connect('http://localhost:8080');

  $(window).click(function(e) {
    var data = {x: e.clientX, y: e.clientY};
    socket.emit('place_bean', data);
  }

  socket.on('bean_emit', function(data) {
    $('body').append('<img id="'+ data.id +'" class="bean" src="images/bean1.jpg" />');
    $('img#'+ data.id).css({ top: data.Y, left: data.X });
  }
});
