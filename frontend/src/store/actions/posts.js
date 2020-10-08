export const GET_POSTS_BY_CATEGORY = "GET_POSTS_BY_CATEGORY";
export const GET_POSTS_BY_CATEGORY_SUCCESS = "GET_POSTS_BY_CATEGORY_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const UPVOTE_TO_POST = "UPVOTE_TO_POST";
export const UPVOTE_TO_POST_SUCCESS = "UPVOTE_TO_POST_SUCCSES";
export const DOWNVOTE_TO_POST = "DOWNVOTE_TO_POST";
export const DOWNVOTE_TO_POST_SUCCESS = "DOWNVOTE_TO_POST_SUCCESS";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const EDIT_POST_BY_POST_ID = "EDIT_POST_BY_POST_ID";
export const EDIT_POST_BY_POST_ID_SUCCESS = "EDIT_POST_BY_POST_ID_SUCCESS";

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export const upVoteToPost = (id) => ({
  type: UPVOTE_TO_POST,
  id,
});

export const downVoteToPost = (id) => ({
  type: DOWNVOTE_TO_POST,
  id,
});

export const addPost = (post) => ({
  type: ADD_POST,
  post,
});

export const editPostByPostId = (post) => ({
  type: EDIT_POST_BY_POST_ID,
  post,
});
