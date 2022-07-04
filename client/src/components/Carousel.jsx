import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Context } from "../context/Context";
import logo from "../img/logo_transparent.png"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



function ImgCarousel() {
  const { fetchedData, setSearchInput } = useContext(Context);

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
                setSearchInput({ title: item.title, year: item.year })
                navigate("/search_Results");
              }}>
                  <img
                    className="d-block border border-white rounded-5 mx-auto"
                    src={item.image}
                    alt="Second slide"
                    style={{
                      height: "22rem",
                    }}
                  />
                  <p className="text-center m-0">Title: {item.title}</p>
                  <p className="text-center m-0">Year: {item.year}</p>
                </motion.div>
              </div>
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
    <div className="w-50">
<div  className="d-flex justify-content-center align-items-center" style={{clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", backgroundColor: "#8AB7F4", width:"100%",height:"100%"}}>
<img src={logo} alt="logo" style={{width:"30rem"}}/>
</div>
      </div>
    </div>
  );
}

export default ImgCarousel;