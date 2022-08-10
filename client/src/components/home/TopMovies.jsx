import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { clientAPI } from "../../utils/axios-utils.js";

/**---MOVIES----------------------------- */

function TopRated() {
  const { IMG_URL } = useContext(Context);
  const [fetchedTop, setFetchedTop] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await clientAPI.get(`/home/top/movie`);
        const topRated = setFetchedTop(response.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h1 className="text-center">Top Rated Movies</h1>
      <div className="mx-auto d-flex flex-wrap justify-content-center">
        {fetchedTop.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/search_Results/search/${item.title}`);
              }}
              key={item.id}
              style={{
                width: "14rem",
                height: "20rem",
                position: "relative",
                background: `url(${IMG_URL + item.poster_path}) center/cover`,
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "0.8rem",
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
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    height: "min-content",
                    width: "100%",
                    margin: "1rem auto",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.875770376509979) 30%, #ecececdf 65%)",
                    padding: "1rem",
                    borderRadius: "0.6rem",
                  }}
                  className="position-absolute bottom-0 d-flex flex-column  text-center shadow-lg"
                >
                  <p className="my-1">
                    <b>{item.title}</b>
                  </p>
                  <p className="my-1">
                    <b>{item.release_date.split("-")[0]}</b>
                  </p>
                  <p className="my-1">
                    Rate: <b>{item.vote_average}</b>
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopRated;
