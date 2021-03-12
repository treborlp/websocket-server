//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


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