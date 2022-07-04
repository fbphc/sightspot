import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo_transparent.png";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      
      <img
            className="d-block pl-5"
            src={logo}
            alt="logo"
            style={{ width: "3rem" }}
          />
          <p className="text-light my-auto">SightSpot</p>
      
    </Navbar>
  );
}

export default Nav;
