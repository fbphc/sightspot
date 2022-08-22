import { createContext, useReducer } from "react";
import { addComment, getAllComments } from "../../utils/axios-utils.js";
import boardReducer, { boardState } from "./boardReducer";



export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(boardReducer, boardState);

const newComment = async(comment)=>{
    
    try {
        const response = await addComment(comment);
        dispatch({ type: "ADD_COMMENT", payload: response.data });
    } catch (err) {
        dispatch({ type: "COMMENT_ERR", payload: err.message });
    }
}
const allComments = async ()=>{
    try {
        const response = await getAllComments();
        /* console.log(response.data) */
        return response.data;
    } catch (err) {
        console.log(err.message)
    }
}
    const value = {
        newComment,
        state,
        allComments
    };
  
    return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};