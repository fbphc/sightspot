import React from 'react'
import loading from "../img/loading.gif";

function Spinner() {
  return (
    <div>
      <img
        src={loading}
        alt="loading"
        style={{ width: "120px", margin: "6rem auto", display: "block" }}
      />
    </div>
  )
}

export default Spinner


