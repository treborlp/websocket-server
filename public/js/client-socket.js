//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

//listeners

socket.on('connect', () => { //Ayuda a asaber cuando se conecta al servidor
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})
socket.on('disconnect', () => { //Ayuda a asaber cuando se conecta al servidor
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    //Enviar al servidor
    socket.emit('enviar-mensaje', mensaje);
})