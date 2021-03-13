const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        //Inicializamos express
        this.app = express();
        this.port = process.env.PORT;
        //Configuracion del socket io
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.path = {}

        //Middleware
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
        //Ejecutamos los sockets
        this.sockets()
    }


    middlewares() {
        //Middlewar cors
        this.app.use(cors());

        //Middlewar carpeta public
        this.app.use(express.static('public'));
    }


    routes() {
        //Importamos las rutas
        // this.app.use(this.path.auth, require("../routes/login"));

    }

    sockets() {
        this.io.on('connection', socket => {
            // console.log("Cliente conectado", socket.id);

            socket.on('disconnect', () => {
                // console.log('Cliente desconectado');
            })

            socket.on('enviar-mensaje', (payload) => {
                this.io.emit('enviar-mensaje', payload);
            })

        });
    }

    listen() {
        //Server express
        // this.app.listen(this.port, () => {
        //     console.log("Servidor Corriendo", this.port);
        // })

        //Server Socket
        this.server.listen(this.port, () => {
            console.log("Servidor Corriendo", this.port);
        })
    }

}
module.exports = Server;