import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useBoard from "../../context/boardContext/useBoard.jsx";
import { Row, Col } from "react-bootstrap";

function CommentBoard() {
  const { state, allComments } = useBoard();
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const x = allComments().then((response) => setCommentList(response));
  }, [state]);

  return (
    <div className="p-3 my-3" style={{ background: "#d0e1fd96", borderRadius: "0.6rem", border: "1px solid #90b5f4"}}>
      {commentList.map((comment, idx) => {
        return (
          <div key={"comment" + idx } className="bg-light">
            <Row style={{ margin: "0.3rem", padding: "0rem" }}>
              <Col className="col-8 mt-3 mb-0">
                <p className="m-0">
                  <b>{comment.author} </b>
                </p>
                <p>{comment.textarea}</p>
              </Col>
              <Col className="text-center mt-4 text-capitalize">
                
                <p><b>Topic:</b> {comment.topic}</p>
              </Col>
              <Col className="text-center mt-4">
                <p>{comment.topic}</p>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default CommentBoard;
