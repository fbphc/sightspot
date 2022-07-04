import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";


function TopRated() {
  const { fetchedData, setSearchInput } = useContext(Context);

  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center">Top Rated</h1>
      <div className="mx-auto d-flex flex-wrap justify-content-center">
        {
          fetchedData.map((item) => {
            return (
              <div onClick={()=>{
                setSearchInput({ title: item.title, year: item.year })
                navigate("/search_Results");
              }}
                key={item.id}
                style={{
                  width: "12rem",
                  height: "18rem",
                  position: "relative",
                  background: `url(${item.image}) center/cover`,
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                className="mx-3 my-4 shadow-lg"
              >
                <motion.div
                  style={{
                    height: "120%",
                    width: "100%",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1, translateY: "-30px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    style={{
                      height: "min-content",
                      width: "100%",
                      margin: "0 auto",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.875770376509979) 30%, #ecececdf 65%)",
                      padding: "1rem",
                      borderRadius: "0.6rem",
                    }}
                    className="position-absolute bottom-0 d-flex flex-column  text-center shadow-lg"
                  >
                    <p>
                      <b>{item.title}</b>
                    </p>
                    <p>
                      Rate: <b>{item.imDbRating}</b>
                    </p>
                    <p>
                      Year: <b>{item.year}</b>
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default TopRated;
