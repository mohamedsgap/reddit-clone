import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputArea from "./InputArea";
import RadioForm from "./RadioForm";

function PostForm(props) {
  const [category, setCategory] = useState("react");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const { category, title, body, author } = props.post;
    setBody(body);
    setAuthor(author);
    setCategory(category);
    setTitle(title);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.submitPost({
      id: props.post.id,
      category,
      title,
      body,
      author,
    });
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const { isNew } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <RadioForm
          label="Category"
          checkedVal={category}
          handleChange={handleChangeCategory}
          disabled={!isNew}
        />
        <InputText
          id="title"
          value={title}
          handleChange={handleChangeTitle}
          required
        />
        <InputArea
          id="body"
          value={body}
          handleChange={handleChangeBody}
          label="content"
          required
        />
        <InputText
          id="author"
          value={author}
          handleChange={handleChangeAuthor}
          required={isNew}
          disabled={!isNew}
        />
        <div className="mt-5">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

PostForm.defaultProps = {
  post: {
    id: "",
    category: "react",
    title: "",
    body: "",
    author: "",
  },
};

PostForm.propTypes = {
  isNew: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
  }),
  submitPost: PropTypes.func.isRequired,
};

export default PostForm;
