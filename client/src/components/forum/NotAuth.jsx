import React from 'react'
//import error from "../img/error.png";
import error from "../../img/error.png";

import { Container } from "react-bootstrap";



function NotAuth() {

  return (
    <Container className=" text-center flex-column">
    <h2> Please Log-In </h2>
    <img
      src={error}
      alt="loading"
      style={{ width: "300px", display: "block", margin: "0 auto" }}
    />
    <h2>To Access this Area</h2>
  </Container>
  )
}

export default NotAuth