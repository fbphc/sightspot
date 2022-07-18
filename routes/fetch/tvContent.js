import {Router} from "express"
import dotenv from "dotenv";
import { getTvContent } from "../../controllers/controllers.js";

dotenv.config({ path: "../.env" });

const contentTvRouter = Router();

contentTvRouter.get("/:contentId", getTvContent)

export default contentTvRouter;
