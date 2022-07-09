import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  const [searchInput, setSearchInput] = useState({});
  const [fetchedData, setFetchedData] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);

  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(`/home`)
      .then((upcoming) => setFetchedData(upcoming.data.results))
      .catch((err) => console.log(err));
  }, []);

  

  useEffect(() => {
    const path = `/search/${searchInput.title}`;

    axios
      .get(path)
      .then((searchResults) => setResultSearch(searchResults.data.results))
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <Context.Provider
      value={{
        searchInput,
        setSearchInput,
        fetchedData,
        IMG_URL,
        resultSearch,
        setResultSearch
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
