

const socketController = socket => {
    console.log('cliente conectado', socket.id);

    socket.on('disconnect', () => {

    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456789;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    });
};

module.exports = {
    socketController
}