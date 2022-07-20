import React, { useContext } from "react";
import { Navbar, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo_transparent.png";
import { FaAngleDoubleUp, FaFilm, FaTv, FaBars } from "react-icons/fa";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import logoSmall from "../../img/logo_transparent_small_black.png";
import { Context } from "../../context/Context";

function Nav() {
  const { show, setShow } = useContext(Context);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offlinkStyle = {
    color: "#333",
    fontSize: "1.5rem",
  };

  return (
    <Navbar
      className="position-sticky top-0 bg-dark d-flex justify-content-between"
      variant="dark"
      style={{ zIndex: "10" }}
    >
      <div className="d-flex">
        <img className="pl-5" src={logo} alt="logo" style={{ width: "4rem" }} />
        <p className="text-light my-auto h5">SightSpot</p>
      </div>

      <Button onClick={handleShow} variant="secondary" className="bg-dark mx-3">
        <h3>
          <FaBars />
        </h3>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton style={{backgroundColor: "#89b6f4"}}>
          <Offcanvas.Title >
            <div className="w-25">
              <img src={logoSmall} alt="sightspot logo" className="w-100" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column text-uppercase bg-light">
          <div>
            <Link
              className="d-flex my-2"
              to="/"
              onClick={() => setShow(false)}
              style={offlinkStyle}
            >
              <FaAngleDoubleUp className="mx-2 h3" />
              <h4> Upcoming</h4>
            </Link>
          </div>
          <div>
            <Link
              className="d-flex my-2"
              to="/top_Movies"
              onClick={() => setShow(false)}
              style={offlinkStyle}
            >
              <FaFilm className="mx-2 h3" />
              <h4>Top Rated Movies</h4>
            </Link>
          </div>
          <div>
            <Link
              className="d-flex my-2"
              to="/top_Series"
              onClick={() => setShow(false)}
              style={offlinkStyle}
            >
              <FaTv className="mx-2 h3" />
              <h4>Top Rated Series</h4>
            </Link>
          </div>
          <SignUp />
          <Login />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Nav;
