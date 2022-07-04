import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const { resultSearch } = useContext(Context);
  const navigate = useNavigate();
  if (resultSearch === undefined) {
    return <NotFound />;
  } else {
    return (
      <>
        <h1 className="text-center">Your Results</h1>
        <div className="mx-auto d-flex flex-wrap justify-content-center">
          {resultSearch.map((item, idx) => {
            return (
              <div
                key={idx + ""}
                style={{
                  width: "12rem",
                  height: "18rem",
                  position: "relative",
                  background: `url(${
                    item.Poster !== "N/A"
                      ? item.Poster
                      : "https://redi.it/wp-content/uploads/2015/08/not-available.png"
                  }) center / cover no-repeat`,
                  overflow: "hidden",
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
                      <b>{item.Title}</b>
                    </p>
                    <p>
                      Type: <b>{item.Type}</b>
                    </p>
                    <p>
                      Year: <b>{item.Year}</b>
                    </p>
                    <Link
                      to={`/search_Results/${item.imdbID}`}
                      className="mb-3"
                    >
                      More...
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        <Button className="mx-auto d-block m-2 w-25" variant="outline-secondary" onClick={() => navigate(-1)}>
          back
        </Button>
        

      </>
    );
  }
}

export default SearchResults;
