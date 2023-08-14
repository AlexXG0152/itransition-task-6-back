import express from "express";
import { Server } from "http";
import { Server as IOServer, Socket } from "socket.io";

const app = express();
const server = Server(app);
const io = new IOServer(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id}: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected!");
  });
});

server.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`);
});
