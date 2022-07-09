import {Router} from "express"
import dotenv from "dotenv";
import { getMovieContent } from "../controllers/controllers.js";

dotenv.config({ path: "../.env" });

const contentMovieRouter = Router();

contentMovieRouter.get("/:contentId", getMovieContent)

export default contentMovieRouter;
