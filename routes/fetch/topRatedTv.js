import { Router } from "express";
import { getTopTv } from "../../controllers/controllers.js";


const topMoviesTv = Router();

topMoviesTv.get("/", getTopTv);

export default topMoviesTv;
