const express = require('express');
const server_app = express();

//TODO : configuration of server
const port = 5000;

server_app.listen(port, () => {
    console.log(`Server now is listing on port ${port} ..`)
})

// TODO : Routing
server_app.get('/view', (req,res) => {
    console.log('get API - view is successful send data ..');
    res.send("<h1>Welcome in Your Application ..<h1>");
})

server_app.get('/student', (req,res) => {
    res.json(
        [
                {
                    name : 'taha',
                    age : 20,
                    salary : 1500,
                    collage : 'IT - Software Engineer '
                },
                {
                    name : 'ahmed',
                    age : 19,
                    salary : 1700,
                    collage : 'Medicine - Doctor '
                }
            ]
    )
    console.log('response ok 200 - sending data api ..')
})

module.exports = server_app;