import { Router } from "express";
import {
    addComment
  } from "../controllers/commentsController.js";

  const commentRouter = Router();

  commentRouter.post("/addComment", addComment);

export default commentRouter;
