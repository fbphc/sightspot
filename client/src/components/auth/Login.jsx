import React, { useReducer, useContext, useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";

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
  const iniStateSignUp = {
    email: "",
    password: "",
  };
  /**-------USEFORM HOOK ------ */
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const password = useRef({});
  password.current = watch("password", "");
  /**-------------------------- */
  const { setShow, isLogged, setIsLogged } = useContext(Context);
  const { Group, Label, Control } = { ...Form };
  const [formStateReducer, dispatch] = useReducer(formReducer, iniStateSignUp);
  const [signData, setSignData] = useState({});

  function textChange(e) {
    dispatch({
      type: "HANDLE_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }
  function submit() {
    axios
      .post(
        `/user/login`,
        {
          email: formStateReducer.email,
          password: formStateReducer.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setSignData(response);
        setShow(false);
        setIsLogged(true)
        return alert("You are logged in!")
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.msg);
      });
  }

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaSignInAlt /> Log-in
      </h4>

      <Form onSubmit={handleSubmit(submit)} className="simpleForm">
        <Group>
          <Label htmlFor="email">&gt; E-mail</Label>
          {isLogged && <p className="text-success">logged</p>}
          <Control
            {...register("email", {
              required: {
                value: true,
                message: "You need to specify a valid email address",
              },

              pattern: {
                value: /^\S+@\S+$/i,
                message: "The email address is not valid!",
              },
            })}
            type="text"
            placeholder="name@example.com"
            name="email"
            aria-describedby="email"
            className="mb-3"
            value={formStateReducer.email}
            onChange={(e) => textChange(e)}
            autoComplete="new-password"
          />
        </Group>
        <Group>
          <Label htmlFor="inputPassword">&gt; Password</Label>
          <Control
            {...register("password", {
              required: {
                value: true,
                message: "You need to specify a password",
              },
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            placeholder="Password"
            type="password"
            name="password"
            aria-describedby="passwordHelpBlock"
            className="mb-3"
            value={formStateReducer.password}
            onChange={(e) => textChange(e)}
            autoComplete="new-password"
          />
        </Group>
        {!formState.isValid && formState.isSubmitted ? (
          <Alert variant="danger">
            {Object.values(errors).map((item, idx) => {
              return (
                <p className="text-lowercase small" key={idx}>
                  {item.message}
                </p>
              );
            })}
          </Alert>
        ) : (
          <Alert variant="success text-lowercase small">
            Please fill in the form
          </Alert>
        )}
        <Button type="submit" variant="outline-secondary">
          Log-In
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
