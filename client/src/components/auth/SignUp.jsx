import React, { useReducer, useContext, useState } from "react";
import {Form, Button} from "react-bootstrap";
import { FaUserAstronaut } from "react-icons/fa";
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
        name: "",
        email: "",
        password: "",
        confPassword: "",
      };
    default:
      return state;
  }
}

function SignUp() {
  const iniStateSignUp = {
    name: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const { setShow } = useContext(Context);
  const [formState, dispatch] = useReducer(formReducer, iniStateSignUp);
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [signData, setSignData] = useState({});

  function textChange(e) {
    setError(false);
    dispatch({
      type: "HANDLE_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formState.password === formState.confPassword && !error) {
      axios
        .post(
          `/user/sign_up`,
          {
            name: formState.name,
            email: formState.email,
            password: formState.password,
            confPassword: formState.confPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => setSignData(response))
        .catch((err) => {
          if (err.response) {
            setError(true);
            setErrorMsg(err.response.data.msg);
          }
        });
        alert("Thank you for signing up!");
        setShow(false);
      } else {
        setError(true);
      setErrorMsg("Passwords did not match");
    }
    
  }

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaUserAstronaut /> Sign Up
      </h4>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="name">&gt; Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          aria-describedby="name"
          className="mb-3"
          value={formState.name}
          onChange={(e) => textChange(e)}
          autoComplete="new-password"
        />
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
        <Form.Label htmlFor="inputConPassword">
          &gt; Confirm Password
        </Form.Label>
        <Form.Control
          placeholder="Confirm Password"
          type="password"
          name="confPassword"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
          value={formState.confPassword}
          onChange={(e) => textChange(e)}
          autoComplete="new-password"
        />
        {error ? (
          <p className="text-danger text-lowercase">{errorMsg}</p>
        ) : null}

        <button variant="outline-secondary" onClick={handleSubmit}>
          Sign Up
        </button>
      </Form>
    </div>
  );
}

export default SignUp;
