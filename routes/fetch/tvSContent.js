import {Router} from "express"
import dotenv from "dotenv";
import { getTvSContent } from "../../controllers/controllers.js";

dotenv.config({ path: "../.env" });

const contentTvSRouter = Router();

contentTvSRouter.get("/:contentId", getTvSContent)

export default contentTvSRouter;
