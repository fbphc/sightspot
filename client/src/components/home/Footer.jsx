import React from "react";
import logo from "../../img/logo_transparent_small_black.png";


function Footer() {
  return (
    <>
            
      <footer className="position-relative" style={{ marginTop: "5%"}}>
        <div
          className="position-absolute"
          style={{
            clipPath: "polygon(0 0, 75% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#8AB7F4",
            bottom: "0%",
            width: "40%",
            height: "4rem",
            borderTop: "3px solid black",
            zIndex: "1",
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
            style={{ bottom: "15%", left: "3rem" }}
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
