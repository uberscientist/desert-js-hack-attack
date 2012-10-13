$(function(){
  $('img').bind('dragstart', function(e) { e.preventDefault(); });
  var socket = io.connect('http://localhost:8000');

  $(window).click(function(e) {
    var data = {x: e.clientX, y: e.clientY};
    socket.emit('place_bean', data);
  });

  socket.on('bean_emit', function(data) {
    $('body').append('<img id="'+ data.id +'" class="bean" src="images/bean1.png" />');
    var bean = $('img#'+ data.id);
    var posX = data.x - 60;
    var posY = data.y - 60;
    bean.css({ top: posY, 
              left: posX,
            zIndex: data.id });

  });
});
