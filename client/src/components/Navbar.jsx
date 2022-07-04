import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center">
        <Link to="/">##################</Link>
      </Container>
    </Navbar>
  );
}

export default Nav;
