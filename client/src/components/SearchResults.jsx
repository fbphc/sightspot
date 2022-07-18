import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Spinner from "./Spinner";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function SearchResults() {
  const { IMG_URL } = useContext(Context);

  const [resultSearch, setResultSearch] = useState([])
  
  const params = useParams();

  useEffect(() => {
    const path = `/search/${params.title}`;
     axios
     .get(path)
      .then((searchResults) => setResultSearch(searchResults.data.results))
      .catch((err) => console.log(err));
    }, [params]);

  const navigate = useNavigate();
  if (resultSearch.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h1 className="text-center">Your Results</h1>
        <div className="mx-auto d-flex flex-wrap justify-content-center">
          {resultSearch.map((item, idx) => {
            if (item.media_type !== "person") {
              return (
                <Link
                  to={`/search_Results/${item.media_type}&${item.id}`}
                  className="mb-3 text-dark"
                  key={idx + ""}
                >
                  <div
                    style={{
                      width: "14rem",
                      height: "20rem",
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
              );
            }
          })}
        </div>

        <Button
          className="mx-auto d-block m-2 w-25"
          variant="outline-secondary"
          onClick={() => navigate(-1)}
        >
          back
        </Button>
      </>
    );
  }
}

export default SearchResults;
