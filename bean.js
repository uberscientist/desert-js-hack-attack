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
    bean.css(
    { top: data.y, 
      left: data.x + 'px',
      zIndex: data.id });

  });
});
