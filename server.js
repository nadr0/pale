// Node.js Server
var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

// Handle connection osf clients
io.on('connection', function(socket){
    // Return the socket id back to the client
});

// Files for client
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    // Render the homepage
})

app.get('/favicon.ico', function(request, response) {
    res.send(204);
});

server.listen(PORT,function(){
    console.log("Server listening on localhost:" + PORT);
});
