import {Router} from "express"
import dotenv from "dotenv";
import { getMovieSContent } from "../controllers/controllers.js";

dotenv.config({ path: "../.env" });

const contentMovieSRouter = Router();

contentMovieSRouter.get("/:contentId", getMovieSContent)

export default contentMovieSRouter;
