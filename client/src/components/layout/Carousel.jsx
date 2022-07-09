import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Context } from "../../context/Context";
import logo from "../../img/logo_transparent.png"

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



function ImgCarousel() {
  const { fetchedData, setSearchInput, IMG_URL } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="d-flex position-relative">
      <div className="w100 position-absolute my-auto" style={{top: "50%", transform: "translateY(-50%)", backgroundColor: "#8AB7F4", width:"100%",height:"3rem"}}></div>
    <Carousel className="w-50" variant="dark">
      {fetchedData.map((item, idx) => {
        if (idx > 10 && idx < 16) {
          return (
            <Carousel.Item key={idx + ""}>
              <div className="w-100 p-3 mx-auto justify-content-center d-flex">
                <motion.div whileHover={{scale: 0.95, opacity: 0.9, cursor: "pointer"}} onClick={()=>{
                setSearchInput({ titleMovie: item.title, year: item.year })
                navigate("/search_Results");
              }}>
                  <img
                    className="d-block border border-white mx-auto"
                    src={IMG_URL + item.poster_path}
                    alt="Second slide"
                    style={{
                      height: "23rem", borderRadius: "0.8rem"
                    }}
                  />
                  <p className="text-center m-0 lead"><b>{item.title}</b></p>
                  <p className="text-center m-0 lead"><b>{item.release_date.split("-")[0]}</b></p>
                </motion.div>
              </div>
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
    <div className="w-50">
<div  className="d-flex justify-content-center align-items-center" style={{clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", backgroundColor: "#8AB7F4", width:"100%",height:"30rem"}}>{/* maxHeight:"30rem", minHeight: "18rem" */}
<img src={logo} alt="logo" style={{ minWidth: "10rem", maxHeight: "100%"}}/>
</div>
      </div>
    </div>
  );
}

export default ImgCarousel;