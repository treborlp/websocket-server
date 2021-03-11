const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        //Inicializamos express
        this.app = express();
        this.port = process.env.PORT

        this.path = {}

        //Middleware
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
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

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Corriendo", this.port);
        })
    }

}
module.exports = Server;