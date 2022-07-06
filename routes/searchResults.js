import { Router } from "express";
import { getSearchResults } from "../controllers/controllers.js";


const searchRouter = Router()

searchRouter.get("/:movieTitle", getSearchResults);

  export default searchRouter;