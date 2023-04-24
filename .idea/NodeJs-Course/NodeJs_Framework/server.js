const http = require('http');
import '../Async-await/async-await';

const port = 5050;

const someError = false;

if (someError){
    process.exit(0); // 0 pro is ended succfuly - 1 pro is ende witherror
}

const server = http.createServer((req, res) => {
    // request , responce
    switch (req.url) {
        case  '/':   // base url
            res.end('Welcome to the home page  ..');
            break;
        case '/admin':
            res.end('Welcome to the admin page  ..');
            break;
        case '/user':
            res.end('Welcome to the user page  ..');
            break;
        default:
            res.end('Page is not found ..')
            break;
    }
});

server.listen(port, () => {
    console.log(`the server is now listing on port ${port}`);
});
// http://localhost:5050/