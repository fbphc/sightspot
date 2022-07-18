import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
//import Carousel from "better-react-carousel";

import { Context } from "../../context/Context";
import logo from "../../img/logo_SightSpot.png";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ImgCarousel() {
  const { fetchedData, setSearchInput, IMG_URL } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="d-flex position-relative align-items-center ">
      <div
        className="w100 position-absolute my-auto"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#8AB7F4",
          width: "100%",
          height: "3rem",
          zIndex: -1,
        }}
      ></div>
      <Carousel className="w-50" variant="dark">
        {fetchedData.map((item, idx) => {
          if (idx < 6) {
            return (
              <Carousel.Item key={idx + ""}>
                <div className="w-100 mt-3 p-3 mx-auto justify-content-center d-flex">
                  <motion.div
                    whileHover={{
                      scale: 0.95,
                      opacity: 0.9,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/search_Results/search/${item.title}`);
                    }}
                  >
                    <img
                      className="d-block border border-white mx-auto"
                      src={IMG_URL + item.backdrop_path}
                      alt="Second slide"
                      style={{
                        borderRadius: "0.8rem",
                        width: "70%",
                      }}
                    />
                    <p className="h5 text-center mb-5">{item.title}</p>
                  </motion.div>
                </div>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
      <div className="w-50">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ minWidth: "10rem", maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImgCarousel;
