import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Context } from "../context/Context";
import logo from "../img/logo_transparent.png"

function ImgCarousel() {
  const { fetchedData } = useContext(Context);

  return (
    <div className="d-flex position-relative">
      <div className="w100 position-absolute my-auto" style={{top: "50%", transform: "translateY(-50%)", backgroundColor: "#8AB7F4", width:"100%",height:"3rem"}}></div>
    <Carousel className="w-50" variant="dark">
      {fetchedData.map((item, idx) => {
        if (idx > 10 && idx < 16) {
          return (
            <Carousel.Item key={idx + ""}>
              <div className="w-100 p-3 mx-auto justify-content-center d-flex">
                <div>
                  <img
                    className="d-block border border-white rounded-5 mx-auto"
                    src={item.image}
                    alt="Second slide"
                    style={{
                      height: "24rem",
                    }}
                  />
                  <p className="text-center">Title: {item.title}</p>
                  <p className="text-center">Year: {item.year}</p>
                </div>
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
