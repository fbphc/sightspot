import React, { useReducer, createContext } from "react";


const AuthContext = createContext();

function formReducer(state, action) {
  switch (action.type) {
    case "HANDLE_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "DEFAULT":
      return {
        username: "",
        email: "",
        password: "",
        confPassword: "",
      };
    default:
      return state;
  }
}



function Provider({ children }) {

  const iniStateSignUp = {
    username: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [formStateReducer, dispatch] = useReducer(formReducer, {});

  function textChange(e) {
    dispatch({
      type: "HANDLE_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }


    return (
        <AuthContext.Provider
          value={{
            textChange,
            formStateReducer,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    }
    
    export { AuthContext, Provider };