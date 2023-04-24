const http = require('http');

const server = http.createServer();

// event listener - عمود الارسال الى بلقط الاشارة - Async - non blocking process
server.on('listening', () => {
    console.log('Server is listeing now !!')
})

server.listen(3000);