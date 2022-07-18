import { Router } from "express";
import { getSearchMovie } from "../../controllers/controllers.js";


const searchMovieRouter = Router()

searchMovieRouter.get("/:movieTitle", getSearchMovie);

export default searchMovieRouter;