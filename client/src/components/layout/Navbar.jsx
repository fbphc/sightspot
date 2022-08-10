import React, { useContext } from "react";
import {
  Navbar,
  Button,
  Offcanvas,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import logo from "../../img/logo_transparent.png";
import logoSmall from "../../img/logo_transparent_small_black.png";
import {
  FaAngleDoubleUp,
  FaFilm,
  FaTv,
  FaBars,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Nav() {
  const { show, setShow, isLogged } = useContext(Context);

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
      style={{ zIndex: "10", height: "80%" }}
    >
      <div className="d-flex">
        <img className="pl-5" src={logo} alt="logo" style={{ width: "4rem" }} />
        <p className="text-light my-auto h5">SightSpot</p>
      </div>
      <div>
        

        {isLogged ? (
          <OverlayTrigger
          key="left"
          placement="left"
          overlay={<Tooltip>Log-Out</Tooltip>}
        >
          <Button
            onClick={handleShow}
            variant="secondary"
            className="bg-dark mx-3"
          >
            <h3>
              <FaSignOutAlt className="text-white" />
            </h3>
          </Button>
        </OverlayTrigger>
        ) : (
          <OverlayTrigger
          key="left"
          placement="left"
          overlay={<Tooltip>Log-In</Tooltip>}
        >
          <Button
            onClick={handleShow}
            variant="primary"
            className="bg-dark mx-3"
          >
            <h3>
              <FaSignInAlt className="text-white" />
            </h3>
          </Button>
        </OverlayTrigger>
        )}

        {
          <Button
            onClick={handleShow}
            variant="secondary"
            className="bg-dark mx-3"
          >
            <h3>
              <FaBars />
            </h3>
          </Button>
        }
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton style={{ backgroundColor: "#89b6f4" }}>
          <Offcanvas.Title>
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
