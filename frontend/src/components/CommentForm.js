import React, { useState } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";

function CommentForm(props) {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthor(author);
    setComment(comment);
    const commentObject = {
      body: comment,
      author,
    };
    props.addComment(commentObject);
    setAuthor("");
    setComment("");
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <InputText
        id="comment"
        value={comment}
        required
        disabled={false}
        handleChange={handleChangeComment}
      />
      <InputText
        id="author"
        value={author}
        required
        disabled={false}
        handleChange={handleChangeAuthor}
      />
      <div className="mt-4">
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Add Comment
        </button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
