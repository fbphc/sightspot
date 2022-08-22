import React from "react";
import { Row, Col } from "react-bootstrap";
import CommentForm from "./CommentForm";
import CommentBoard from "./CommentBoard";
import NotAuth from "./NotAuth";

import useAuth from "../../context/auth/useAuth";
import { Context } from "../../context/Context";
import {useContext} from "react"
function Board() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <h1 className="text-center mt-3 mb-5">Message Board</h1>
      {!isAuthenticated ? (
        <NotAuth />
      ) : (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Row>
            <Col >
              <CommentForm />
            </Col>
            <Col>
            </Col>
          </Row>
              <CommentBoard/>
        </div>
      )}
    </>
  );
}

export default Board;
