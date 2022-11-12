
const http = require('http');

const server = http.createServer(); //server is an event emitter.

server.on('connection',(socket) => {
    console.log('New connection ...')
})
server.listen(3000); //port 3000

console.log('Listening on port 3000...');
//output

/* 
Listening on port 3000...'  //after in browser visiting localhost:3000 we will get New connection ...

*/ 

