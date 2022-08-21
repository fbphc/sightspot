import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useBoard from "../../context/boardContext/useBoard";
import useAuth from "../../context/auth/useAuth";

function CommentForm() {
  const { newComment } = useBoard();
  const { userLoc } = useAuth();


  const [commentData, setCommentData] = useState({
    textarea: "",
    topic: "",
    userId: userLoc.id,
    author: userLoc.name
  });
  const changehandler = (e) => {
    const elementName = e.target.name;
    const value = e.target.value;

    setCommentData((oldState) => {
      return { ...oldState, [elementName]: value };
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    newComment(commentData)
  }

  return (
    <div
      style={{ border: "1px solid #90b5f483", borderRadius: "0.4rem" }}
      className="p-3 "
    >
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Select className="mb-3" onChange={changehandler} name="topic">
            <option>Choose a topic</option>
            <option value="news">News</option>
            <option value="theater">Theater</option>
            <option value="other">Other...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changehandler}
            name="textarea"
            as="textarea"
            rows={5}
            type="text"
            placeholder="Your Message"
          />
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default CommentForm;
