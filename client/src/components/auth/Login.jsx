import React from "react";
import Form from "react-bootstrap/Form";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";


function SignUp() {
  function handleSubmit() {}
  return (
    <div className="mt-5">
      <h4 className="mb-4">
        <FaSignInAlt /> Log-in
      </h4>

      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">&gt; E-mail</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
        />
        <Form.Label htmlFor="inputPassword5">&gt; Password</Form.Label>
        <Form.Control
          type="password"
          id="password_user"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
        />
        <Button
                    variant="outline-secondary"
                    
                  >
                    Log-In
                  </Button>
      </form>
    </div>
  );
}

export default SignUp;
