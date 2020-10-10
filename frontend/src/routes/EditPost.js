import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
import NotFound from "./NotFound";
import { getPostByPostId, editPostByPostId } from "../store/actions";

export default function EditPost(props) {
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostByPostId(props.match.params.postId));
  }, [dispatch]);

  const editPost = ({ id, title, body }) => {
    dispatch(editPostByPostId(id, title, body));
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  if (post === {}) {
    return <NotFound />;
  }
  return (
    <div className="mt-5 container">
      <PostForm submitPost={editPost} post={post} isNew={false} />
    </div>
  );
}

EditPost.defaultProps = {
  post: {},
};

EditPost.propTypes = {
  post: PropTypes.object,
  getPostByPostId: PropTypes.func.isRequired,
  editPostByPostId: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
