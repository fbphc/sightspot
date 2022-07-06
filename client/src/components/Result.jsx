import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Context } from "../context/Context";
import YouTube from "react-youtube";
import logoSmall from "../img/logo_transparent_small.png";

function Result() {
  const { IMG_URL } = useContext(Context);
  const inState = {
    genres: [],
    spoken_languages: [],
    videos: { results: [{ key: "", name: "" }] },
  };

  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(inState);

  const params = useParams();
  const movieId = params.name;

  useEffect(() => {
    axios
      .get(`/movieContent/${movieId}`)
      .then((searchResults) => setMovieData(searchResults.data))
      .catch((err) => console.log(err));
  }, [movieId]);

  const trailer = movieData.videos.results.find(
    (item) => item.name === "Official Trailer"
  );

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className="col-1 p-0">
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#212529",
                  height: "30%",
                  width: "100%",
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
                }}
              >
                <img className="w-100 mt-2" src={logoSmall} alt="logo" />
              </div>
            </div>
          </Col>
          <Col className="d-flex">
            <div
              className="shadow-lg mx-auto"
              style={{
                width: "24rem",
                height: "36rem",
                background: `url(${
                  movieData.Poster !== "N/A"
                    ? IMG_URL + movieData.poster_path
                    : "https://redi.it/wp-content/uploads/2015/08/not-available.png"
                }) center / cover no-repeat`,
              }}
            ></div>
          </Col>
          <Col>
            <div>
              <p>Title: {movieData.original_title}</p>

              <p>
                Genre:{" "}
                {movieData.genres.map((item, idx) => (
                  <span key={idx + "gen"}>{item.name} </span>
                ))}
              </p>
              <p>Plot: {movieData.overview}</p>
              <p>
                Year:{" "}
                {movieData.release_date !== undefined
                  ? movieData.release_date.split("-")[0]
                  : "-"}
              </p>
              <p>WebSite: {movieData.homepage}</p>
              <p>
                Spoken Languages:{" "}
                {movieData.spoken_languages.map((item, idx) => (
                  <span key={idx + "laspoken"}>{item.name} </span>
                ))}
              </p>
            </div>
          </Col>
          <Col className="col-1 p-0">
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <div
                className="d-flex align-items-end"
                style={{
                  backgroundColor: "#212529",
                  transform: "scaleX(-1)",
                  height: "100%",
                  width: "100%",
                  clipPath: "polygon(0 70%, 100% 60%, 100% 100%, 0 100%)",
                }}
              >
                <img
                  className="w-100 d-block mb-3"
                  src={logoSmall}
                  alt="logo"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
          <div
            className="mx-auto"
            style={{
              borderRadius: "1.2rem",
              overflow: "hidden",
              maxWidth: "max-content",
            }}
          >
            {trailer === undefined ? (
              <YouTube
                videoId={movieData.videos.results[0].key}
                opts={opts}
                onReady={onReady}
              />
            ) : (
              <YouTube videoId={trailer.key} opts={opts} onReady={onReady} />
            )}
          </div>
        
     

      <Button
        className="mx-auto d-block m-2 w-25"
        variant="outline-secondary"
        onClick={() => navigate(-1)}
      >
        back
      </Button>
    </>
  );
}

export default Result;
