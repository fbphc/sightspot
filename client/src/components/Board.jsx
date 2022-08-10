import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

function Board() {
  const {test} = useContext(AuthContext)
  return (
    <>
    <div>Board</div>
    <p>{test}</p>
    </>
  )
}

export default Board