import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {clientAPI} from "../../utils/axios-utils.js"

import Carousel from "better-react-carousel";

function ResultSmilar({ contentParams }) {
  const [similar, setSimilar] = useState({ results: [] });
  const [similarId, setSimilarId] = useState();
  const { IMG_URL } = useContext(Context);

  useEffect(() => {
    (async () => {
      try {
        const response = await clientAPI.get(`/${contentParams.mediaType}S/${contentParams.contentId}`)
        const topRated = setSimilar(response.data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [contentParams.contentId, contentParams.mediaType, similarId]);


  return (
    <div className="container">
      <Carousel cols={4} rows={1} gap={10} loop className="rounded">
        {similar.results.map((item, idx) => {
          return (
            <Carousel.Item key={idx + "simResult"}>
              <Link
              onClick = {()=> setSimilarId(item.Id)}
                to={`/search_Results/${contentParams.mediaType}&${item.id}`}
                className="mb-3 text-dark"
              >
                <div
                  key={idx + ""}
                  style={{
                    width: "12rem",
                    height: "18rem",
                    position: "relative",
                    background: `url(${
                      item.poster_path === null ||
                      item.poster_path === undefined
                        ? "https://redi.it/wp-content/uploads/2015/08/not-available.png"
                        : IMG_URL + item.poster_path
                    }) center / cover no-repeat`,
                    overflow: "hidden",
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
                    transition={{ duration: 0.4 }}
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
                        <b>
                          {item.original_title === undefined
                            ? item.original_name
                            : item.original_title}
                        </b>
                      </p>
                      <p className="my-1">
                        Type: <b>{item.media_type}</b>
                      </p>
                      <p className="my-1">
                        <b>
                          {item.release_date === undefined ||
                          item.release_date === ""
                            ? item.first_air_date === undefined
                              ? "-"
                              : item.first_air_date.split("-")[0]
                            : item.release_date.split("-")[0]}
                        </b>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ResultSmilar;
