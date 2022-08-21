import { createContext, useReducer, useContext } from "react";
import authReducer, { authState } from "./authReducer";
import { signup, login, validateToken } from "../../utils/axios-utils.js";
import { Context } from "../../context/Context";

export const AuthContext = createContext(authState);

export const AuthProvider = ({ children }) => {
  const { setShow } = useContext(Context);
  const [state, dispatch] = useReducer(authReducer, authState);
  const userLoc = {
    name: localStorage.getItem("user"),
    id: localStorage.getItem("id"),
  };

  const signUp = async (formData) => {
    try {
      const response = await signup(formData);
      dispatch({ type: "AUTH_SIGNUP", payload: response.data });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user.id);
      localStorage.setItem("user", response.data.user.name);
      setShow(false);
      alert("You are Registered");
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  };
  const logIn = async (formData) => {
    try {
      const response = await login(formData);
      dispatch({ type: "AUTH_SIGNIN", payload: response.data });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user.id);
      localStorage.setItem("user", response.data.user.name);
      setShow(false);
      alert("You are Logged in!");
      return response;
    } catch (err) {
      dispatch({ type: "SIGNIN_ERR", payload: err.message });
    }
  };

  const tokenValidator = async () => {
    try {
      const response = await validateToken();
      if (response.data.message) {
        dispatch({ type: "SIGN_OUT" });
        if (localStorage.getItem("token")) localStorage.removeItem("token");
        if (localStorage.getItem("user")) localStorage.removeItem("user");
        if (localStorage.getItem("id")) localStorage.removeItem("id");
      } else {
        dispatch({
          type: "AUTH_VALID",
          payload: { name: response.data.name, id: response.data.id },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (localStorage.getItem("user")) localStorage.removeItem("user");
    if (localStorage.getItem("id")) localStorage.removeItem("id");
  };

  const resetError = () => {
    dispatch({ type: "CLR_ERR" });
  };

  const value = {
    logIn,
    signUp,
    isAuthenticated: state.isAuthenticated,
    error: state.error,
    tokenValidator,
    resetError,
    signOut,
    state,
    userLoc,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
