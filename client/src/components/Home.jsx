import React, { useContext } from 'react'
import Spinner from "./Spinner";
import { Context } from "../context/Context";
import TopRated from "./home/Upcoming";

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
      <TopRated />
    );
  } 
}

export default Home