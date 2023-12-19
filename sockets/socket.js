
const {io} = require('../index');
// mensajes de socket
io.on('connection', client => {
 console.log('cliente conecctado');
 client.on('disconnect', () => {
  console.log('cliente desconectado');
 });
 
 client.on('mensaje',(payload) =>{
  console.log('mensaje',payload); 
  io.emit('mensaje',{admin:'nuevo mensaaje'})
 });
});  