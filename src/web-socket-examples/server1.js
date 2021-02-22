import express from "express";
import http from "http";
import socketIO from "socket.io";
import { colorfulLog } from 'colorful-log-bj';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  colorfulLog(`Connected to: ${socket.client.id}`);

  // receive the random number from the client server
  socket.on("message", (data) => {
    colorfulLog(data);
  });

  socket.on("disconnect", () => {
    colorfulLog(`Disconnected from: ${socket.client.id}`);
  });
});

server.listen(8000, () => {
  // add second empty string argument for colorfulLog function
  colorfulLog("Waiting for connections on port 8000");
});
