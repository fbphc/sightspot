import { createContext } from "react";
import { addComment } from "../../utils/axios-utils.js";
import jwt_decode from "jwt-decode";


export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
    

const newComment = async(comment)=>{
    const response = await addComment(comment);
}

    const value = {
        newComment,
    };
  
    return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};