import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
import { addPost } from "../store/actions";

export default function NewPost(props) {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const addPostFunc = (post) => {
    dispatch(addPost(post));
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="mt-5 container">
      <PostForm submitPost={addPostFunc} isNew />
    </div>
  );
}
NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};
