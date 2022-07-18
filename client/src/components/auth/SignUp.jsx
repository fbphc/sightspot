import React, { useReducer } from "react";
import Form from "react-bootstrap/Form";
import { FaUserAstronaut } from "react-icons/fa";
import { Button } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "HANDLE_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}

const iniStateSignUp = {
  username: "",
  email: "",
  password: "",
};

function SignUp() {
  const [formState, dispatch] = useReducer(formReducer, iniStateSignUp);

  function textChange(e) {
    dispatch({
      type: "HANDLE_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }
  function test() {
    console.log(formState);
  }
  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaUserAstronaut /> Sign Up
      </h4>
      <form>
        <Form.Label htmlFor="username">&gt; Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="username"
          aria-describedby="username"
          className="mb-3"
          value={formState.username}
          onChange={(e) => textChange(e)}
          required
        />
        <Form.Label htmlFor="e_mail">&gt; E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          aria-describedby="email"
          className="mb-3"
          value={formState.email}
          onChange={(e) => textChange(e)}
          required
        />
        <Form.Label htmlFor="inputPassword">&gt; Password</Form.Label>
        <Form.Control
          placeholder="user12345"
          type="password"
          name="password"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
          value={formState.password}
          onChange={(e) => textChange(e)}
          required
        />
        <button variant="outline-secondary" onClick={test}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
