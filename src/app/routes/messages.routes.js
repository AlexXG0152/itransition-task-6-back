import { Router } from "express";
import { getMessagesByTags } from "../controllers/messages.controller.js";

export const messagesRouter = Router();

messagesRouter.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

messagesRouter.post("/api/messages", getMessagesByTags);
