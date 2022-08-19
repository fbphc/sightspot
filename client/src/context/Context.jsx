import React, { useState, useEffect, createContext } from "react";
import { clientAPI } from "../utils/axios-utils.js";

const Context = createContext();

function Provider({ children }) {
  const [show, setShow] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    (async () => {
      try {
        const response = await clientAPI.get(`/home`);
        const topRated = setFetchedData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        fetchedData,
        IMG_URL,
        show,
        setShow,
        toggleAuth,
        setToggleAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
