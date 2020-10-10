import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import PostsContainer from "../components/PostsContainer";
import { setSortBy } from "../store/actions";

export default function AllPosts(props) {
  const dispatch = useDispatch();
  const changeSortBy = (e) => dispatch(setSortBy(e.traget.value));
  const posts = useSelector((state) => state.posts);
  const categories = useSelector((state) => state.categories);
  const sortBy = useSelector((state) => state.sortBy);
  if (categories.length > 0 && posts) {
    categories.forEach((category) => {
      if (posts[category] && posts[category].length > 0) {
        posts[category].forEach((post) => allPosts.push(post));
      }
    });
  }
  return (
    <PostsContainer
      sortBy={sortBy}
      posts={allPosts}
      changeSortBy={changeSortBy}
    />
  );
}
AllPosts.propTypes = {
  posts: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(["date", "score"]).isRequired,
  setSortBy: PropTypes.func.isRequired,
};
