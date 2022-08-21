import { useContext } from "react";
import { BoardContext } from "./BoardContext";

const useBoard = () => {
  const context = useContext(BoardContext);
  return context;
};

export default useBoard;