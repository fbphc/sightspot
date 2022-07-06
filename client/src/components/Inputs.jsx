import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate, Link } from "react-router-dom";

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function Inputs() {
  const [titleText, setTitleText] = useState("");
  const [yearText, setYearText] = useState("");

  const { setSearchInput } = useContext(Context);
  const navigate = useNavigate();

  function handleInputs(e) {
    e.preventDefault();
   
    if (isNaN(+yearText) && yearText !== "") {
      window.alert("Please insert a valid year");
    }
    if (titleText === "") {
      window.alert("Please insert a valid title");
    } else {
      setSearchInput({ title: titleText, year: yearText });
      navigate("/search_Results");
    }

  }

  function resetInputs() {
    setTitleText("");
    setYearText("");
  }

  return (
    <div className="my-3 container d-flex justify-content-center text-center shadow-lg p-3 mb-5 bg-white rounded">
      <form className="w-100" onSubmit={handleInputs}>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <Link to="/"className="text-dark h5 m-0">| Top Rated |</Link>
          </Col>
          <Col>
            <InputGroup className="my-3">
              <InputGroup.Text id="title-input">Movies</InputGroup.Text>
              <FormControl
                onChange={(e) => setTitleText(e.target.value)}
                placeholder="Find a movie"
                aria-label="Movies"
                aria-describedby="movie-input"
                value={titleText}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="my-3">
              <InputGroup.Text id="year-input">Series</InputGroup.Text>
              <FormControl
                onChange={(e) => setYearText(e.target.value)}
                placeholder="Find a serie"
                aria-label="Series"
                aria-describedby="serie-input"
                value={yearText}
              />
            </InputGroup>
          </Col>

          <Col className="d-flex justify-content-around my-3">
            <Button type="submit" onClick={handleInputs} variant="outline-secondary">
              Search
            </Button>
            <Button variant="outline-secondary" onClick={resetInputs}>
              Reset
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Inputs;
