const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./server_practice/server2.html', (err, data) => {
        if(err) throw err;
        res.end(data);
    });
}).listen(3001, () => {
    console.log('ready 3001 server!')
});