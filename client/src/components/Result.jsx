import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Context } from "../context/Context";
import YouTube from "react-youtube";
import logoSmall from "../img/logo_transparent_small.png";
import ResultSmilar from "./ResultSmilar";

function Result() {
  const { IMG_URL } = useContext(Context);

  const inState = {
    genres: [],
    spoken_languages: [],
    videos: {
      results: [{ key: "", name: "" }],
    },
  };

  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(inState);
  const [trailer, setTrailer] = useState("");
  const [styleYou, setStyleYou] = useState();

  const params = useParams();
  const contentParams = {
    mediaType: params.name.split("&")[0],
    contentId: params.name.split("&")[1],
  };
 
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const style = {
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    zIndex: 10,
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -10%)",
  };

  useEffect(() => {
    axios
      .get(`/${contentParams.mediaType}/${contentParams.contentId}`)
      .then((searchResults) => setMovieData(searchResults.data))
      .catch((err) => console.log(err));
  }, [contentParams.contentId, contentParams.mediaType]);

  function onReady(e) {
    e.target.pauseVideo();
  }

  useEffect(() => {
    setStyleYou({ display: "none" });
  }, [contentParams.contentId]);

  function handleToggleYoutube() {
    setStyleYou({ ...style, display: "flex" });
    setTrailer(
      movieData.videos.results.find((item) => item.name === "Official Trailer")
    );
  }

  return (
    <>
      <div style={styleYou}>
        <Button
          variant="outline-secondary"
          onClick={() => setStyleYou({ display: "none" })}
        >
          X
        </Button>
        {trailer === undefined ? (
          <YouTube
            className="mx-auto"
            videoId={movieData.videos.results[0].key}
            opts={opts}
            onReady={onReady}
          />
        ) : (
          <YouTube
            className="mx-auto"
            videoId={trailer.key}
            opts={opts}
            onReady={onReady}
          />
        )}
        <p className="h5 text-center">
          {contentParams.mediaType === "movie"
            ? movieData.original_title
            : movieData.name}
        </p>
        {movieData.tagline ? (
          <p className="h6 text-center">- {movieData.tagline} -</p>
        ) : (
          ""
        )}
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
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
          <Col className="d-flex flex-column">
            <div
              className="shadow-lg mx-auto"
              style={{
                width: "20rem",
                height: "32rem",
                borderRadius: "1rem",
                background: `url(${
                  movieData.Poster !== "N/A"
                    ? IMG_URL + movieData.poster_path
                    : "https://redi.it/wp-content/uploads/2015/08/not-available.png"
                }) center / cover no-repeat`,
              }}
            ></div>
          </Col>
          <Col className="d-flex flex-column">
            <Row>
              <div
                className="mx-auto"
                style={{
                  borderRadius: "1.2rem",
                  overflow: "hidden",
                  maxWidth: "max-content",
                }}
              ></div>
            </Row>
            <Row>
              <div>
                <p>
                  Title:{" "}
                  {contentParams.mediaType === "movie"
                    ? movieData.original_title
                    : movieData.name}
                </p>

                <p>
                  Genre:{" "}
                  {movieData.genres.map((item, idx) => (
                    <span key={idx + "gen"}>{item.name} </span>
                  ))}
                </p>
                <p>Plot: {movieData.overview}</p>
                {
                  <p>
                    Year:{" "}
                    {movieData === undefined
                      ? "-"
                      : movieData.release_date === undefined
                      ? movieData.first_air_date === undefined
                        ? "-"
                        : movieData.first_air_date.split("-")[0]
                      : movieData.release_date.split("-")[0]}
                  </p>
                }
                <p>WebSite: {movieData.homepage}</p>
                <p>
                  Spoken Languages:{" "}
                  {movieData.spoken_languages.map((item, idx) => (
                    <span key={idx + "laspoken"}>{item.name} </span>
                  ))}
                </p>
                {movieData.videos.results.length === 0 ? (
                  <Button variant="outline-secondary" disabled>
                    Trailer not avaiable
                  </Button>
                ) : (
                  <Button
                    variant="outline-secondary"
                    onClick={handleToggleYoutube}
                  >
                    Watch the trailer
                  </Button>
                )}
              </div>
            </Row>
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
      </div>
      <ResultSmilar contentParams={contentParams} />
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
