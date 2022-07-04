import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

function getTopRated (req, res) {
  axios
    .get(
      `https://imdb-api.com/en/API/MostPopularMovies/${process.env.IMDB_KEY}`
    )
    .then((topRated) => res.json(topRated.data))
    .catch((err) => console.log(err));
};

function getSearchResults(req, res){
  const reqParams = req.params.movieYear;
  const url =
    req.params.movieYear === "all"
      ? `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${req.params.movieTitle}`
      : `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${req.params.movieTitle}&y=${req.params.movieYear}`;
  axios
    .get(url)
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
};
function getMovieContent(req, res){
  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${req.params.movieId}`
    )
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
};
export { getTopRated, getSearchResults, getMovieContent };
