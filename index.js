var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('message-type', function(data){
    console.log('on message-type');
    console.log(data);
    socket.emit('x', data);
  });
});


var port = process.env.PORT || 8888;
http.listen(port, function () {
  console.log('listening on *:' + port);
});
