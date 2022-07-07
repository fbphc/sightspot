import { Router } from "express";
import { getUpcoming } from "../controllers/controllers.js";


const upcomingRouter = Router();

upcomingRouter.get("/", getUpcoming);

export default upcomingRouter;
