import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import PostsContainer from "../components/PostsContainer";
import { setSortBy } from "../store/actions";

export default function PostsByCategory(props) {
  const dispatch = useDispatch();
  const posts = useSelector(
    (state) => state.posts[props.match.params.category]
  );
  //const posts = postsX[props.ownProps.match.params.category];
  const sortBy = useSelector((state) => state.sortBy);
  //const categories = useSelector((state) => state.categories);

  const changeSortBy = (e) => dispatch(setSortBy(e.target.value));

  return (
    <PostsContainer
      filter={props.match.params.category}
      sortBy={sortBy}
      posts={posts}
      changeSortBy={changeSortBy}
    />
  );
}

PostsByCategory.defaultProps = {
  posts: [],
};

PostsByCategory.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf(["date", "score"]).isRequired,
};
