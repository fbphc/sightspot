import { Router } from "express";
import { getTopMovies } from "../../controllers/controllers.js";


const topMoviesRouter = Router();

topMoviesRouter.get("/", getTopMovies);

export default topMoviesRouter;
