import React, { useReducer, useContext } from "react";
import Form from "react-bootstrap/Form";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import { Context } from "../../context/Context";

function formReducer(state, action) {
  switch (action.type) {
    case "HANDLE_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "DEFAULT":
      return {
        email: "",
        password: "",
      };
    default:
      return state;
  }
}

function SignUp() {
  const { setShow } = useContext(Context);
  
  const iniStateSignUp = {
    email: "",
    password: "",
  };
  const [formState, dispatch] = useReducer(formReducer, iniStateSignUp);

  function textChange(e) {
    dispatch({
      type: "HANDLE_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `/user/login`,
        {
          email: formState.email,
          password: formState.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((signData) => console.log(signData))
      .catch((err) => console.log(err));
    /* dispatch({ type: "DEFAULT" });
    setShow(false); */
  }

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaSignInAlt /> Log-in
      </h4>

      <form>
        <Form.Label htmlFor="email">&gt; E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          aria-describedby="email"
          className="mb-3"
          value={formState.email}
          onChange={(e) => textChange(e)}
          autoComplete="new-password"
        />
        <Form.Label htmlFor="inputPassword">&gt; Password</Form.Label>
        <Form.Control
          placeholder="Password"
          type="password"
          name="password"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
          value={formState.password}
          onChange={(e) => textChange(e)}
          autoComplete="new-password"
        />
        <button variant="outline-secondary" onClick={handleSubmit}>
          Log-In
        </button>
      </form>
    </div>
  );
}

export default SignUp;
