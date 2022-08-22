import { Router } from "express";
import {
    addComment,
    getAllComments
  } from "../controllers/commentsController.js";

  const commentRouter = Router();

  commentRouter.post("/addComment", addComment);
  commentRouter.get("/getAllComments", getAllComments)

export default commentRouter;
