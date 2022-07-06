import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

function getTopRated(req, res) {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1-4`
    )
    .then((topRated) => res.json(topRated.data))
    .catch((err) => console.log(err));
}

function getSearchResults(req, res) {

  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${req.params.movieTitle}`;
  axios
    .get(url)
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
}
function getMovieContent(req, res) {
   axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${process.env.TMDB_KEY}&language=en-US&append_to_response=videos`
    )
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
}
export { getTopRated, getSearchResults, getMovieContent };
