import React, { useContext } from 'react'
import Spinner from "../Spinner";
import { Context } from "../../context/Context";
import Upcoming from "./Upcoming";

function Home() {
  const { fetchedData } = useContext(Context);
  if (fetchedData.length === 0) {
    return (
      <>
      <h1 className="text-center">Loading...</h1>
        <Spinner />
      </>
    );
  } else {
    return (
      <Upcoming />
    );
  } 
}

export default Home