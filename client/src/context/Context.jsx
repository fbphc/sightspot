import React, { useState, useEffect, createContext } from "react";
import { clientAPI } from "../utils/axios-utils.js";
import { useLocation } from "react-router-dom";
const Context = createContext();

function Provider({ children }) {
  const [show, setShow] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [hideSearch, setHideSearch] = useState(false);
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const location = useLocation();

useEffect(()=>{
  if(location.pathname === "/board"){
    setHideSearch(true) 
  }else {
    setHideSearch(false)
  }
}, [location.pathname])

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
        hideSearch, setHideSearch
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
