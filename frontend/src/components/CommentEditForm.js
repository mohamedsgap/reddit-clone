import React, { useState } from "react";
import PropTypes from "prop-types";

function CommentEditForm(props) {
  const [body, setBody] = useState(props.defaultVal);

  const changeHandler = (e) => {
    setBody(e.target.value);
  };

  const editComment = (e) => {
    e.preventDefault();
    props.editComment(body);
  };

  return (
    <form onSubmit={editComment}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={body}
          onChange={changeHandler}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

CommentEditForm.propTypes = {
  defaultVal: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CommentEditForm;
