import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
 
  const [fetchedData, setFetchedData] = useState([]);


  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(`/home`)
      .then((upcoming) => setFetchedData(upcoming.data.results))
      .catch((err) => console.log(err));
  }, []);


  return (
    <Context.Provider
      value={{
        fetchedData,
        IMG_URL,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
