import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate, Link } from "react-router-dom";

import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

function Inputs() {
  const [titleText, setTitleText] = useState("");
  const { setSearchInput } = useContext(Context);
  const navigate = useNavigate();

  function handleInputs(e) {
    e.preventDefault();

    if (titleText === "") {
      window.alert("Please insert a valid title");
    } else {
      setSearchInput({ title: titleText.toLowerCase() });
      navigate("/search_Results");
    }
  }


  return (
    <div
      className="my-3 container bg-white text-center shadow-lg p-3 mb-5"
    >
      <form className="w-100" onSubmit={handleInputs}>
        <Row className="my-0">
          <Col className="d-flex justify-content-center align-items-center"></Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="my-3 w-75 mx-auto">
              <InputGroup.Text id="title-input">Title</InputGroup.Text>
              <FormControl
                onChange={(e) => setTitleText(e.target.value)}
                placeholder="Movies / Series"
                aria-label="Movies"
                aria-describedby="movie-input"
                value={titleText}
              />
            </InputGroup>
          </Col>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link to="/top_Movies" className="text-dark h5 mx-5 w-25">
                | Top Rated Movies|
              </Link>
              <Button
                className="mx-5 w-25"
                type="submit"
                onClick={handleInputs}
                variant="outline-secondary"
              >
                Search
              </Button>

              <Link to="/top_Series" className="text-dark h5 mx-5 w-25">
                | Top Rated Series|
              </Link>
            </Col>
          </Row>
        </Row>
      </form>
    </div>
  );
}

export default Inputs;
