import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import logoSmall from "../img/logo_transparent_small.png"

function Result() {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({});
  const params = useParams();
  const movieId = params.name;

  useEffect(() => {
    axios
      .get(`/movieContent/${movieId}`)
      .then((searchResults) => setMovieData(searchResults.data))
      .catch((err) => console.log(err));
  }, [movieId]);

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
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
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
                    ? movieData.Poster
                    : "https://redi.it/wp-content/uploads/2015/08/not-available.png"
                }) center / cover no-repeat`,
              }}
            ></div>
          </Col>
          <Col>
            <div>
              <p>Title: {movieData.Title}</p>
              <p>Year: {movieData.Year}</p>
              <p>Release: {movieData.Released}</p>
              <p>Time: {movieData.Runtime}</p>
              <p>Genre: {movieData.Genre}</p>
              <p>Cast: {movieData.Actors}</p>
              <p>Director: {movieData.Director}</p>
              <p>Plot: {movieData.Plot}</p>
              <p>Country:{movieData.Country}</p>
              <p>Adwards: {movieData.Awards}</p>
              <p>Type: {movieData.Type}</p>
              {movieData.Type === "series" && (
                <p>Seasons: {movieData.totalSeasons}</p>
              )}
            </div>
          </Col>
          <Col className="col-1 p-0">
          <div
              style={{
                height: "100%",
                width: "100%"
              }}
            >
              <div
              className="d-flex align-items-end"
                style={{
                  backgroundColor: "#212529",
                  transform: "scaleX(-1)",
                  height: "100%",
                  width: "100%",
                  clipPath:
                    "polygon(0 70%, 100% 60%, 100% 100%, 0 100%)",
                }}
              >
                <img className="w-100 d-block mb-3" src={logoSmall} alt="logo" />

              </div>
            </div>
          </Col>
        </Row>
      </Container>
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
