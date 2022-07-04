import React from "react";
import logo from "../img/logo_transparent_small_black.png";

function Footer() {
  return (
    <>
      <div
        className="mt-5"
        style={{
          clipPath: "polygon(0 0, 75% 0%, 100% 100%, 0% 100%)",
          backgroundColor: "#8AB7F4",
          width: "10rem",
          height: "2rem",
          borderTop: "3px solid black",
        }}
      ></div>
      <footer>
        <div
          className="w-25 position-absolute"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
            backgroundColor: "#8AB7F4",
            height: "2.4rem",
          }}
        >
          <img
            className="d-block position-absolute"
            src={logo}
            alt="logo"
            style={{ width: "3rem", bottom: "10%" }}
          />
          <p
            className="position-absolute m-0"
            style={{ bottom: "10%", left: "12%" }}
          >
            Ⓒsightspot
          </p>
        </div>
        <div className="bg-dark" style={{ height: "2.4rem" }}></div>
      </footer>
    </>
  );
}

export default Footer;
