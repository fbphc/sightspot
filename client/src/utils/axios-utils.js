import axios from "axios";

export const clientAPI = axios.create({ baseURL: "http://localhost:5002" });

export const signup = (user) => clientAPI.post("/user/sign_up", user);

export const login = (user) => {
  return clientAPI.post("/user/login", user);
};

export const validateToken = () => {
  return clientAPI.get("/user/tokenValidation", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const addComment = (comment)=>{
  return clientAPI.post("/comments/addComment", comment);
}
export const getAllComments = ()=>{
  return clientAPI.get("/comments/getAllComments");
}