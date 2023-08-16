import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Server } from "http";
import { Server as IOServer, Socket } from "socket.io";
import { router } from "./src/app/routes/index.js";
import db from "./src/app/models/index.js";

import { createMessage } from "./src/app/controllers/messages.controller.js";

dotenv.config({ path: "./src/environments/.env" });

const app = express();
const server = Server(app);
const io = new IOServer(server, {
  cors: {
    credentials: true,
    origin: [
      "https://itransition-task-4-front-s.onrender.com",
      "http://localhost:4200",
      "*",
    ],
  },
});

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("User connected");
  io.emit("username", `${socket.id}`);
  const userId = uuidv4();

  socket.on("message", async (message) => {
    // io.emit("message", `${socket.id}:${message}`);
    io.emit("message", JSON.stringify({ socket: socket.id, message }));
    await createMessage(message);
  });

  socket.on("username", async (username) => {
    console.log(username, userId);
    io.emit("username", `${socket.id}: ${username}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected!");
  });
});

db.mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

server.listen(PORT, async () => {
  console.log(`Started on port: ${PORT}`);
});
