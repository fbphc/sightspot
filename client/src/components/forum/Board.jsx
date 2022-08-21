import React from "react";
import { Row, Col } from "react-bootstrap";
import CommentForm from "./CommentForm";
import CommentBoard from "./CommentBoard";
import NotAuth from "./NotAuth";

import useAuth from "../../context/auth/useAuth";

function Board() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <h1 className="text-center">Message Board</h1>
      {!isAuthenticated ? (
        <NotAuth />
      ) : (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Row>
            <Col className="col-4">
              <CommentForm />
            </Col>
            <Col className="col-8" style={{ background: "blue" }}>
              <CommentBoard />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default Board;
