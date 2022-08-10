import axios from "axios";

export const clientAPI = axios.create({ baseURL: "http://localhost:5003" });

export const signUp = async (user) => {
  try {
    const response = await clientAPI.post("/user/sign_up", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return alert("Thank you for signing up!");
  } catch (error) {
    console.log(error);
  }
};


/* export const logIn = async (user)=> {
    try {
        const response = await clientAPI.post("/user/login", user, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          return alert("You are Logged In!!!");
    } catch (error) {
        console.log(error);
    }
} */
