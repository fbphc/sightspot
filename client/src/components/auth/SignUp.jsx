import React, { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { FaUserAstronaut } from "react-icons/fa";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import useAuth from "../../context/auth/useAuth";


function SignUp() {
  /**-------USEFORM HOOK ------ */
  const { register, handleSubmit, formState } = useForm();
  const { Group, Label, Control } = { ...Form };
  const { errors } = formState;
  /**-------------------------- */

  const { signUp, error, resetError, isAuthenticated } = useAuth();
  const { setShow, setToggleAuth } = useContext(Context);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  
  const submit = async () => {
    if (signUpData.password !== signUpData.confPassword) {
      return alert("Passwords don't match");
    } 
      signUp(signUpData);
  };
 
  const changehandler = (e) => {
    const elementName = e.target.name;
    const value = e.target.value;
    resetError();
    setSignUpData((oldState) => {
      return { ...oldState, [elementName]: value };
    });
  };
  

  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaUserAstronaut /> Sign Up
      </h4>
      <Form onSubmit={handleSubmit(submit)} className="simpleForm">
        <Group>
          <Label>&gt; Username</Label>
          <Control
            {...register("name", {
              required: {
                value: true,
                message: "You must specify your username",
              },
            })}
            placeholder="Your name"
            type="text"
            name="name"
            aria-describedby="name"
            className="mb-3"
            //value={formStateReducer.username}
            onChange={(e) => changehandler(e)}
          />
        </Group>
        <Group>
          <Label>&gt; E-mail</Label>
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
            //value={formStateReducer.email}
            onChange={(e) => changehandler(e)}
            autoComplete="new-password"
          />
        </Group>
        <Group>
          <Label>&gt; Password - min 6 char</Label>
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
            aria-describedby="password"
            className="mb-3"
            //value={formStateReducer.password}
            onChange={(e) => changehandler(e)}
            autoComplete="new-password"
          />
        </Group>
        <Group>
          <Label>&gt; Confirm Password</Label>
          <Control
            placeholder="Confirm Password"
            type="password"
            name="confPassword"
            aria-describedby="confPassword"
            className="mb-3"
            //value={formStateReducer.confPassword}
            onChange={(e) => changehandler(e)}
            autoComplete="new-password"
          />
        </Group>

        {error  ? null : !formState.isValid && formState.isSubmitted ? (
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
          <Alert variant="success">
            <p className="text-lowercase small">Please fill in the form</p>
          </Alert>
        )}
        {error && 
          <p className="small text-danger">
            This Email is already in the database!
          </p>}
        <Button type="submit" variant="outline-secondary">
          Sign Up
        </Button>
        <p className="d-inline small mx-3 text-lowercase">Or</p>
        <Button onClick={() => setToggleAuth(true)} variant="outline-info text-dark" >
          Back
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
