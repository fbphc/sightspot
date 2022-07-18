import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Button } from "react-bootstrap";

function YouComponent({movieData, setYouComponent}) {
  const [trailer, setTrailer] = useState();
  useEffect(() => {
    setTrailer(
      movieData.videos.results.find((item) => item.name === "Official Trailer")
    );
  }, []);

  function onReady(e) {
    e.target.pauseVideo();
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const style = {
    justifyContent: "center",
    backgroundColor : "#333333",

    alignItem: "center",
    flexDirection: "column",
    zIndex: 10,
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -10%)",
    padding: "0.6rem",
    borderRadius: "0.8rem"
  };

  return (
    <div style={style}>
      <div className="d-flex justify-content-between ">
      <h5 className="text-white align-items-center">- {movieData.title ? movieData.title : movieData.name} -</h5>
        <Button
        className="mb-2 text-white"
          variant="outline-secondary"
          onClick={() => setYouComponent(false)}
        >
          <span aria-hidden="true">&times;</span>
        </Button>
        </div>
      {trailer === undefined ? (
        <YouTube
          className="mx-auto"
          videoId={movieData.videos.results[0].key}
          opts={opts}
          onReady={onReady}
        />
      ) : (
        <YouTube
          className="mx-auto"
          videoId={trailer.key}
          opts={opts}
          onReady={onReady}
        />
      )}
    </div>
  );
}

export default YouComponent;
