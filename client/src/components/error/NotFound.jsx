import React from "react";
import error from "../../img/error.png";
import { Container } from "react-bootstrap";



function NotFound() {
  return (
      <>
    <Container className=" text-center flex-column">
      <h2>Oops, Sorry...</h2>
      <img
        src={error}
        alt="loading"
        style={{ width: "300px", display: "block", margin: "0 auto" }}
      />
      <h2>No Titles found</h2>
    </Container>
  </>
  );
}

export default NotFound;
