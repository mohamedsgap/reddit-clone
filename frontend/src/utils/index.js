import _ from "lodash";

export const getSortedPosts = (posts, order) => {
  if (order === "date") {
    return _.orderBy(posts, ["timestamp", "voteScore"], ["desc", "desc"]);
  } else if (order === "score") {
    return _.orderBy(posts, ["voteScore", "timestamp"], ["desc", "desc"]);
  }
  return posts;
};

export function dateFormatEgypt(timestamp) {
  return new Date(timestamp).toLocaleString("en-EG", {
    timeZone: "UTC",
  });
}
export function dateFormat(timestamp) {
  return new Date(timestamp).toString();
}
