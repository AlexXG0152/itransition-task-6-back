import { Router } from "express";
import { messagesRouter } from "./messages.routes.js";
import { tagsRouter } from "./tags.routes.js";

export const router = Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use(messagesRouter);
router.use(tagsRouter);
