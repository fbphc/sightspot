import React, { useReducer, useContext, useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

import { postMethod } from "../../utils/axios-utils.js";

import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";

import useAuth from "../../context/auth/useAuth";

function Login() {
   
  /**-------USEFORM HOOK ------ */
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const password = useRef({});
  password.current = watch("password", "");
  /**-------------------------- */
  const { setShow} = useContext(Context);
  const { logIn, error, resetError } = useAuth();
  
  const { Group, Label, Control } = { ...Form };
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changehandler = (e) => {
    const elementName = e.target.name;
    const value = e.target.value;
    resetError();
    setLoginData((oldState) => {
      return { ...oldState, [elementName]: value };
    });
  };
  const submit = async () => {
    logIn(loginData)
    };
    
    

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaSignInAlt /> Log-in
      </h4>

      <Form onSubmit={handleSubmit(submit)} className="simpleForm">
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
            onChange={(e) => changehandler(e)}
            autoComplete="new-password"
          />
        </Group>
        <Group>
          <Label htmlFor="password">&gt; Password</Label>
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
            onChange={(e) => changehandler(e)}
            autoComplete="new-password"
          />
        </Group>
        { error ? null : !formState.isValid && formState.isSubmitted ? (
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
        {error && 
          <p className="small text-danger">
            incorrect Password or Email
          </p>}
        <Button type="submit" variant="outline-secondary">
          Log-In
        </Button>
      </Form>
    </div>
  );
        }

export default Login;
