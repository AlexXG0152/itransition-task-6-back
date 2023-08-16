import { Router } from "express";
import { getTags } from "../controllers/tags.controller.js";

export const tagsRouter = Router();

tagsRouter.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

tagsRouter.get("/api/messages/tags", getTags);
