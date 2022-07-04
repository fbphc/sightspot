import {Router} from "express"
import dotenv from "dotenv";
import { getMovieContent } from "../controllers/controllers.js";

dotenv.config({ path: "../.env" });

const contentRouter = Router();

contentRouter.get("/:movieId", getMovieContent)

export default contentRouter;
