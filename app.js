var connect = require('connect');
var io = require('socket.io').listen(8800);

var count = 0;

io.sockets.on('connection', function(socket) {
  socket.on('place_bean', function(data) {
    count++;
    data.id = count;
    socket.emit('bean_emit', data);
  });
});

connect.createServer(
  connect.static(__dirname)
).listen(8668);
