$(function(){
  $('img').bind('dragstart', function(e) { e.preventDefault(); });
  var socket = io.connect('http://localhost:8000');

  $(window).click(function(e) {
    var data = {x: e.clientX, y: e.clientY};
    socket.emit('place_bean', data);
  });

  socket.on('bean_emit', function(data) {
    console.log(data);
    $('body').append('<img id="'+ data.id +'" class="bean" src="images/bean1.png" />');
    var bean = $('img#'+ data.id);
    var posX = data.x - Math.floor(bean.width()/2);
    var posY = data.y - Math.floor(bean.height()/2);
    { top: posY, 
      left: posX,
      zIndex: data.id });

  });
});
