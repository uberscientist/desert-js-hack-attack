var connect = require('connect');
var io = require('socket.io');



connect.createServer(
  connect.static(__dirname)
).listen(8080);
