const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello world');
});

server.listen(3000);
server.on('listening',() => {
    console.log('server 3000 is open');
});
server.on('error', (err) => {
    console.log('error', err);
});