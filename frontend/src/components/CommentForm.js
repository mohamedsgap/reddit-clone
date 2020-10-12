import React, { useState } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";

const defaultState = {
  comment: "",
  author: "",
};

function CommentForm(props) {
  const [initComment, setComment] = useState(defaultState.comment);
  const [author, setAuthor] = useState(defaultState.author);

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthor(author);
    setComment(initComment);
    const comment = {
      body: initComment,
      author: author,
    };
    props.addComment(comment);
    setAuthor(defaultState.author);
    setComment(defaultState.comment);
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <InputText
        id="comment"
        value={initComment}
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
