import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import EditBadge from "./EditBadge";
import Badge from "./Badge";
import CloseButton from "./CloseButton";
import CommentCount from "./CommentCount";
import VoteButtons from "./VoteButtons";
import { deletePost, upVoteToPost, downVoteToPost } from "../store/actions";
import { dateFormat } from "../utils";

export default function PostDetail(props) {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const deletePostFunc = () => {
    dispatch(deletePost(props.post.id));
    setRedirect(true);
  };

  const voteUp = () => {
    const { id } = post;
    dispatch(upVoteToPost(id));
  };

  const voteDown = () => {
    const { id } = post;
    dispatch(downVoteToPost(id));
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  const {
    id,
    title,
    category,
    body,
    author,
    timestamp,
    voteScore,
    commentCount,
  } = post;
  //console.log("debug posts author", author);
  const badgeColor = voteScore >= 10 ? "badge-danger" : "badge-secondary";

  return (
    <div className="my-4 post">
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          <h4 className="mr-2">{title}</h4>
          <EditBadge link={`/${category}/${id}/edit`} />
        </div>
        <CloseButton closeHandler={deletePostFunc} />
      </div>
      <small>Post By {author} / </small>
      <small>{dateFormat(timestamp)}</small>
      <div>
        <Badge label={category} />
        <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
      </div>
      <div className="my-5">
        <p>{body}</p>
      </div>
      <div className="d-flex justify-content-between align-items-end">
        <CommentCount commentCount={commentCount} />
        <VoteButtons voteUp={voteUp} voteDown={voteDown} />
      </div>
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};
