import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../img/logo_transparent.png";
import movie from "../../img/movie.png";
import tv from "../../img/tv.png";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar
      className="position-sticky top-0 bg-dark d-flex"
      variant="dark"
      style={{ zIndex: "10" }}
    >
      <Link to="/" className="d-flex">
        <img
          className="d-block pl-5"
          src={logo}
          alt="logo"
          style={{ width: "3rem" }}
        />
        <p className="text-light my-auto">SightSpot</p>
      </Link>

      <Link
        to="/top_Movies"
        style={{
          width: "2.5rem",
          borderRadius: "50%",
          backgroundColor: "#d2d5da",
          margin: "0 0.5rem 0 0.5rem",
        }}
      >
        <img className="d-block w-100 p-2" src={movie} alt="movie" />
      </Link>
      <Link
        to="/top_Series"
        style={{
          width: "2.5rem",
          borderRadius: "50%",
          backgroundColor: "#d2d5da",
          margin: "0 0.5rem 0 0.5rem",

        }}
      >
        <img className="d-block w-100 p-2" src={tv} alt="movie" />
      </Link>

    </Navbar>
  );
}

export default Nav;
