import express from "express";
import cors from "cors";
import "dotenv/config";

import searchMovieRouter from "./routes/fetch/searchMovie.js";
import contentMovieRouter from "./routes/fetch/movieContent.js";
import contentTvRouter from "./routes/fetch/tvContent.js";
import contentMovieSRouter from "./routes/fetch/movieSContent.js";
import contentTvSRouter from "./routes/fetch/tvSContent.js";
import upcomingRouter from "./routes/fetch/upcomingList.js";
import topMoviesRouter from "./routes/fetch/topRatedMovies.js";
import topTvRouter from "./routes/fetch/topRatedTv.js";

import userRouter from "./routes/userRouter.js";

import mongoose from "mongoose";
import { connectDB } from "./helper/dbConnect.js";

/*--------*/
// DON'T CHANGE ANYTHING 
import path from "path";
const  __dirname = path.resolve();
/*-------*/

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

/* --- DATABASE --- */
connectDB()
mongoose.connection.on("open", ()=>{
    console.log("db is connected")
})

mongoose.connection.on("error", (error)=>{
    console.log("Connection to MongoDB has failed", error.message)
})
/* --------------- */
app.use("/user/", userRouter)

/* --- Fetchers --- */
app.use("/home", upcomingRouter);
app.use("/home/top/movie", topMoviesRouter);
app.use("/home/top/tv", topTvRouter);
app.use("/search/", searchMovieRouter);
app.use("/movie", contentMovieRouter);
app.use("/tv", contentTvRouter);
app.use("/movieS", contentMovieSRouter);
app.use("/tvS", contentTvSRouter);

/* --------------- */



/* ----------------*/
// DON'T CHANGE ANYTHING
app.use(express.static(path.resolve(__dirname, "./client/build"))); 
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    }); 
/* ------------- */
app.listen(PORT, (req, res) => console.log("Listening at port:", PORT));


//client/build/index.html