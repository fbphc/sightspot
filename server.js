import express from "express";
import cors from "cors";
import "dotenv/config";
import searchMovieRouter from "./routes/searchMovie.js";


import contentMovieRouter from "./routes/movieContent.js";
import contentMovieSRouter from "./routes/movieSContent.js";

import contentTvRouter from "./routes/tvContent.js";

import upcomingRouter from "./routes/upcomingList.js";
import topMoviesRouter from "./routes/topRatedMovies.js";
import topTvRouter from "./routes/topRatedTv.js";



/*--------*/
// DON'T CHANGE ANYTHING 
import path from "path";
const  __dirname = path.resolve();
/*-------*/

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/search/", searchMovieRouter);

app.use("/movie", contentMovieRouter);
app.use("/tv", contentTvRouter);

app.use("/movieS", contentMovieSRouter);


app.use("/home", upcomingRouter);
app.use("/home/top/movie", topMoviesRouter);
app.use("/home/top/tv", topTvRouter);




/* ----------------*/
// DON'T CHANGE ANYTHING
app.use(express.static(path.resolve(__dirname, "./client/build"))); 
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    }); 
/* ------------- */
app.listen(PORT, (req, res) => console.log("Listening at port:", PORT));


//client/build/index.html