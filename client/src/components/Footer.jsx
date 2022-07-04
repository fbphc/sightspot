import React from "react";

function Footer() {
  return (
    <footer className="mt-5">
      <div
        className="w-25 position-absolute"
        style={{
          clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
          backgroundColor: "#8AB7F4",
           height:"2rem"
        }}
      ></div>
      
      <div className="bg-dark" style={{height:"2rem"}}></div>
    </footer>
  );
}

export default Footer;
