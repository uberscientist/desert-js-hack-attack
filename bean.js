$(function(){
  var images = ["images/bean1.png", 
                "images/bean2.png",
                "images/cup1.png",
                "images/cup2.png",
                "images/heart1.png",
                "images/heart2.png",
                "images/heart3.png"];
  var stockImage = "images/stock.png";
  $('img').bind('dragstart', function(e) { e.preventDefault(); });
  var socket = io.connect('http://abovesobelow.com:8800');

  $(window).click(function(e) {
    var data = {x: e.clientX, y: e.clientY};
    socket.emit('place_bean', data);
  });

  socket.on('bean_emit', function(data) {
    console.log(data);
    var len = images.length;
    $('body').append('<img id="'+ data.id +'" class="bean" src="'+ images[Math.floor(Math.random()*images.length)] +'"/>')
             .append('<img id="stock' + data.id +'" class="stock" src="'+ stockImage+'" />');
    var bean = $('img#'+ data.id);
    var stock = $('img#stock'+ data.id);
    var posX = data.x - 60;
    var posY = data.y - 60;
    bean.css({ top: posY, 
              left: posX,
            zIndex: data.id });
    stock.css({ top: posY, 
              left: posX,
            zIndex: data.id }).hide();
    bean.fadeOut(3000, function() {
      stock.fadeIn(500);
    });
  });
});
