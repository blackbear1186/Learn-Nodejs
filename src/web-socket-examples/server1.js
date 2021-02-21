import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log(`Connected to: ${socket.client.id}`);

  socket.on('someEvent', () => {
    socket.emit('someOtherEvent', { message: 'hello! '});
  })

  socket.on('disconnect', () => {
    console.log(`Disconnected from: ${socket.client.id}`);
  })
})

server.listen(8000, () =>{
  console.log('Waiting for connections on port 8000');
})