import axios from "axios";
import { v1 as uuidv1 } from "uuid";

const headers = {
  Accept: "application/json",
  Authorization: "ReadableJay",
};

export async function getAllCategories() {
  const res = await axios.get(`/api/categories`, { headers });
  return res.data.categories;
}

export async function getPostsByCategory(category) {
  const res = await axios.get(`/api/${category}/posts`, { headers });
  return res.data;
}

export async function upVoteToPost(id) {
  const res = await axios.post(
    `/api/posts/${id}`,
    { option: "upVote" },
    { headers }
  );
  return res.data;
}

export async function downVoteToPost(id) {
  const res = await axios.post(
    `/api/posts/${id}`,
    { option: "downVote" },
    { headers }
  );
  return res.data;
}

export async function upVoteToComment(id) {
  const res = await axios.post(
    `/api/comments/${id}`,
    {
      option: "upVote",
    },
    { headers }
  );
  return res.data;
}

export async function downVoteToComment(id) {
  const res = await axios.post(
    `/api/comments/${id}`,
    {
      option: "downVote",
    },
    { headers }
  );
  return res.data;
}

export async function addPost({ category, title, body, auther }) {
  const id = uuidv1();
  const timestamp = Date.now();
  const res = await axios.post(
    `/api/posts`,
    {
      id,
      timestamp,
      title,
      body,
      auther,
      category,
    },
    { headers }
  );
  return res.data;
}

export async function deletePost(id) {
  const res = await axios.delete(`/api/posts/${id}`, { headers });
  return res.data;
}

export async function getPostByPostId(id) {
  const res = await axios.get(`/api/posts/${id}`, { headers });

  return res.data;
}

export async function editPostByPostId({ id, title, body }) {
  const res = await axios.put(`/api/posts/${id}`, { title, body }, { headers });
  return res.data;
}

export async function getAllCommentsByPostId(id) {
  const res = await axios.get(`/api/posts/${id}/comments`, { headers });
  return res.data;
}

export async function deleteComment(id) {
  const res = await axios.delete(`/api/comments/${id}`, { headers });
  return res.data;
}

export async function addComment({ body, auther, parentId }) {
  const id = uuidv1();
  const timestamp = Date.now();
  const res = await axios.post(
    `/api/comments`,
    {
      id,
      timestamp,
      body,
      auther,
      parentId,
    },
    { headers }
  );
  return res.data;
}

export async function editComment({ id, body }) {
  const timestamp = Date.now();
  const res = await axios.put(
    `/api/comments/${id}`,
    { body, timestamp },
    { headers }
  );
  return res.data;
}

console.log("id on api file", uuidv1());
