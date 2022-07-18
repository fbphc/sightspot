import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate} from "react-router-dom";

import {InputGroup, FormControl, Button } from "react-bootstrap";

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
    <div className="my-3 container bg-white text-center shadow-lg p-3 mb-5">
      <form className="w-100" onSubmit={handleInputs}>
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

        <Button
          className="mx-5 w-25"
          type="submit"
          onClick={handleInputs}
          variant="outline-secondary"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Inputs;
