import { createContext, useReducer } from "react";
import { addComment } from "../../utils/axios-utils.js";
import boardReducer, { boardState } from "./boardReducer";



export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(boardReducer, boardState);

const newComment = async(comment)=>{
    
    try {
        const response = await addComment(comment);
        console.log(response);
        dispatch({ type: "ADD_COMMENT", payload: response.data });
    } catch (err) {
        dispatch({ type: "COMMENT_ERR", payload: err.message });
    }
}

    const value = {
        newComment,
    };
  
    return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};