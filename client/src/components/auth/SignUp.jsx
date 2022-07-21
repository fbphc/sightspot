import React, { useReducer, useContext, useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaUserAstronaut } from "react-icons/fa";
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
        username: "",
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
    username: "",
    email: "",
    password: "",
    confPassword: "",
  };
  /**-------USEFORM HOOK ------ */
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const password = useRef({});
  password.current = watch("password", "");
  /**-------------------------- */

  const { show, setShow } = useContext(Context);
  const [formStateReducer, dispatch] = useReducer(formReducer, iniStateSignUp);
  const { Group, Label, Control } = { ...Form };
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
        `/user/sign_up`,
        {
          name: formStateReducer.username,
          email: formStateReducer.email,
          password: formStateReducer.password,
          confPassword: formStateReducer.confPassword,
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
        return alert("Thank you for signing up!");
      })
      .catch((err) => {
        if (err.response) return alert(err.response.data.msg);
      });
  }
  function test() {
    console.log(errors);
  }

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaUserAstronaut /> Sign Up
      </h4>
      <Form onSubmit={handleSubmit(submit)} className="simpleForm">
        <Group>
          <Label htmlFor="name">&gt; Username</Label>
          <Control
            {...register("username", {
              required: {
                value: true,
                message: "You must specify your username",
              },
            })}
            placeholder="Your name"
            type="text"
            name="username"
            aria-describedby="username"
            className="mb-3"
            value={formStateReducer.username}
            onChange={(e) => textChange(e)}
            autoComplete="new-password"
          />
        </Group>
        <Group>
          <Label htmlFor="email">&gt; E-mail</Label>
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
          <Label htmlFor="inputPassword">&gt; Password - min 6 char</Label>
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
        <Group>
          <Label htmlFor="inputConPassword">&gt; Confirm Password</Label>
          <Control
            {...register("confPassword", {
              required: {
                validate: (value) =>
                  value === password.current || "The passwords do not match", 
              },
            })}
            placeholder="Confirm Password"
            type="password"
            name="confPassword"
            aria-describedby="passwordHelpBlock"
            className="mb-3"
            value={formStateReducer.confPassword}
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

        <Button type="submit" variant="outline-secondary" onClick={test}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
