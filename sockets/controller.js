const controllerSocket = (socket) => {
    // console.log("Cliente conectado", socket.id);

    socket.on('disconnect', () => {
        // console.log('Cliente desconectado');
    })

    socket.on('enviar-mensaje', (payload, feedback) => {
        socket.broadcast.emit('enviar-mensaje', payload); //this.io se reemplaza por broadcast
        const id = 12346;
        feedback(id)
    })

}

module.exports = controllerSocket