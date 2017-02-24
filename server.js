// Node.js Server
var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

// Handle connection of clients
io.on('connection', function(socket){

});

// Files for client
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    // Render the homepage
})

server.listen(PORT,function(){

});
