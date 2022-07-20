import {Router} from "express";
import { validator} from "../middlewares/validator.js"
import {registerUser, loginUser, getAllUsers} from "../controllers/authControllers.js"
import authenticateToken from "../middlewares/auth.js";


const userRouter = Router();

userRouter.post("/sign_up", validator(), registerUser)
userRouter.post("/login", validator(), loginUser)
userRouter.get("/", authenticateToken, getAllUsers)


export default userRouter;