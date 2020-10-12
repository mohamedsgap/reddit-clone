import React, { useState } from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";
import CloseButton from "./CloseButton";
import CommentEditForm from "./CommentEditForm";
import VoteButtons from "./VoteButtons";
import { dateFormatEgypt } from "../utils";

function Comment(props) {
  const [editMode, setEditMode] = useState(false);
  const { body, voteScore, author, timestamp } = props.comment;
  const upVote = () => {
    props.upVote(props.comment.id);
  };
  const downVote = () => {
    props.downVote(props.comment.id);
  };
  const deleteComment = () => {
    props.deleteComment(props.comment.id);
  };
  const editComment = (body) => {
    props.editComment({
      id: props.comment.id,
      body,
    });
    setEditMode(false);
  };
  const editModeFunc = () => {
    setEditMode(true);
  };
  const renderCommentBody = editMode ? (
    <CommentEditForm defaultVal={body} editComment={editComment} />
  ) : (
    <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex align-items-start">
        {body}&nbsp;
        <button
          type="button"
          className="badge badge-success"
          onClick={editModeFunc}
        >
          Edit <i className="fa fa-pencil-square-o" aria-hidden="true" />
        </button>
      </div>
      <CloseButton closeStyle="text-muted" closeHandler={deleteComment} />
    </div>
  );
  const badgeColor = voteScore >= 10 ? "badge-danger" : "badge-secondary";
  return (
    <li className="list-group-item list-group-item-warning">
      {renderCommentBody}
      <div>
        <small className="text-muted">commented by {author}</small>
        {" / "}
        <small className="text-muted">{dateFormatEgypt(timestamp)}</small>
      </div>
      <div className="d-flex justify-content-between align-items-end">
        <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
        <div>
          <VoteButtons voteUp={upVote} voteDown={downVote} />
        </div>
      </div>
    </li>
  );
}

Comment.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

export default Comment;
