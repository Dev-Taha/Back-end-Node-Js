const { createServer } = require('http');

const server = createServer();

server.listen(5000);

//server extends from emitter -
//TODO: Usage of Socket : real time connection between client and server - online chatApplication - REAL TIME server

server.on('connection', (socket) => {
    console.log(socket)
})