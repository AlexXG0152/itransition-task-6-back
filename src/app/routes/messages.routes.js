import { Router } from "express";
import {
  getMessagesByTags,
  getMessages,
  getMessageById,
} from "../controllers/messages.controller.js";

export const messagesRouter = Router();

messagesRouter.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

messagesRouter.get("/api/messages", getMessages);

messagesRouter.post("/api/messages", getMessagesByTags);

messagesRouter.get("/api/messages/:id", getMessageById);
