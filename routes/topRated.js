import { Router } from "express";
import { getTopRated } from "../controllers/controllers.js";


const topRatedRouter = Router();

topRatedRouter.get("/movie", getTopRated);

export default topRatedRouter;
