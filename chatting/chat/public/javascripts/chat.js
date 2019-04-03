let count = 1;

function chatConnect(io) {
    io.on('connection', (socket) => {
        console.log('user connected: ', socket.id);
        var name = "user" + count++;
        io.to(socket.id).emit('change name', name);

        socket.on('disconnect', function () {
            console.log('user disconnected: ', socket.id);
        });

        socket.on('send message', function (name, text) {
            var msg = name + ' : ' + text;
            console.log(msg);
            io.emit('receive message', msg);
        });
    });
}

module.exports = chatConnect;