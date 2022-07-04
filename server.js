import express from "express";
import cors from "cors";
import "dotenv/config";
import searchRouter from "./routes/searchResults.js";
import contentRouter from "./routes/movieContent.js";
import topRatedRouter from "./routes/topRated.js";
import { getTopRated, getSearchResults, getMovieContent } from "./controllers/controllers.js"

/*--------*/
// DON'T CHANGE ANYTHING 
import path from "path";
const  __dirname = path.resolve();
/*-------*/

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/search", searchRouter);
app.use("/movieContent", contentRouter);

app.use("/topRated", topRatedRouter);

/* ----------------*/
// DON'T CHANGE ANYTHING
app.use(express.static(path.resolve(__dirname, "./client/build"))); 
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    }); 
/* ------------- */
app.listen(PORT, (req, res) => console.log("Listening at port:", PORT));


//client/build/index.html