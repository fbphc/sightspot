import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  const [searchInput, setSearchInput] = useState({});
  const [fetchedData, setFetchedData] = useState([]);
  
  const [resultSearch, setResultSearch] = useState([]);


  useEffect(() => {
    axios
      .get(`/topRated/topRatedList`)
      .then((topRated) => setFetchedData(topRated.data.items))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    const path = searchInput.year ===  "" ? `/search/${searchInput.title}&all` : `/search/${searchInput.title}&${searchInput.year}`;
    axios
      .get(path)
      .then((searchResults) => setResultSearch(searchResults.data.Search))
      .catch((err) => console.log(err));
  }, [searchInput]);
 
  return (
    <Context.Provider
      value={{
        searchInput,
        setSearchInput,
        fetchedData,
        /* searchActive,
        setSearchActive, */
        resultSearch,
        setResultSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
