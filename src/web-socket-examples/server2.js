import { io } from "socket.io-client";

// connect multiple clients by using createSocketClient function
const createSocketClient = (name, interval) => {
  const socket = io("http://localhost:8000/");

    socket.on('connect', () => {
      console.log(`${name} connected`);
    })

    setInterval(() => {
      socket.emit('message', `Hello from ${name}`);
    }, interval)

    // print a random number every 2 seconds
    // setInterval(() => {
    //   const randomNumber = Math.ceil(Math.random() * 100);
    //   socket.emit("newNumber", `Here's your random number: ${randomNumber}`);
   
  

  socket.on("disconnect", () => {
    console.log(`${name} disconnected!`);
  });

};

createSocketClient('Client server 1', 2000);
createSocketClient('Client server 2', 5000);