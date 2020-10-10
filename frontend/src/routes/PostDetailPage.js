import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import PostDetail from "../components/PostDetail";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import {
  getPostByPostId,
  addComment,
  getAllCommentsByPostId,
} from "../store/actions";

export default function PostDetailPage(props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const { postId } = props.match.params;
    dispatch(getAllCommentsByPostId(postId));
    dispatch(getPostByPostId(postId));
  }, [dispatch]);

  const addCommentHandle = (comment) => {
    comment.parentId = props.match.params.postId;
    dispatch(addComment(comment));
  };
  if (post.err) {
    return <Redirect to="/error/InvalidPostId" />;
  }
  const renderCommentList = !_.isEmpty(comments) && (
    <CommentList comments={comments} />
  );
  return (
    <div>
      <PostDetail post={post} />
      <hr />
      <CommentForm addComment={addCommentHandler} />
      <hr />
      {renderCommentList}
    </div>
  );
}

PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  getPostByPostId: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  getAllCommentsByPostId: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};
