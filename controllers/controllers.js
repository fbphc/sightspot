import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

function getUpcoming(req, res) {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1-4`
    )
    .then((data) => res.json(data.data))
    .catch((err) => console.log(err));
}

function getTopMovies(req, res) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1-4`
      )
      .then((data) => res.json(data.data))
      .catch((err) => console.log(err));
  }
  
  function getTopTv(req, res) {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1-4`
      )
      .then((data) => res.json(data.data))
      .catch((err) => console.log(err));
  }
  
function getSearchMovie(req, res) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${req.params.movieTitle}`;
  axios
    .get(url)
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
}

function getMovieContent(req, res) {
   axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.contentId}?api_key=${process.env.TMDB_KEY}&language=en-US&append_to_response=videos`
    )
    .then((searchResults) => res.json(searchResults.data))
    .catch((err) => console.log(err));
}

function getTvContent(req, res) {
  axios
   .get(
     `https://api.themoviedb.org/3/tv/${req.params.contentId}?api_key=${process.env.TMDB_KEY}&language=en-US&append_to_response=videos`
   )
   .then((searchResults) => res.json(searchResults.data))
   .catch((err) => console.log(err));
}
export { getTvContent, getTopTv, getTopMovies, getUpcoming, getSearchMovie, getMovieContent };
