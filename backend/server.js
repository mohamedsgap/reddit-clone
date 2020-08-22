require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const categories = require("./categories");
const posts = require("./posts");
const comments = require("./comments");

const app = express();
app.use(cors());

app.get("api/categories", (req, res) => {
  categories.getAll(req.token).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error",
      });
    }
  );
});

app.get("/api/:category/posts", (req, res) => {
  posts.getByCategory(req.token, req.params.category).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.get("/api/posts", (req, res) => {
  posts.getAll(req.token).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.post("/api/posts", bodyParser.json(), (req, res) => {
  posts.add(req.token, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.get("/api/posts/:id", (req, res) => {
  posts.get(req.token, req.params.id).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.delete("/api/posts/:id", (req, res) => {
  posts
    .disable(req.token, req.params.id)
    .then((post) => comments.disableByParent(req.token, post))
    .then(
      (data) => res.send(data),
      (error) => {
        console.error(error);
        res.status(500).send({
          error: "There was an error.",
        });
      }
    );
});

app.post("/api/posts/:id", bodyParser.json(), (req, res) => {
  const { option } = req.body;
  const id = req.params.id;
  posts.vote(req.token, id, option).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.put("/api/posts/:id", bodyParser.json(), (req, res) => {
  posts.edit(req.token, req.params.id, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.get("/api/posts/:id/comments", (req, res) => {
  comments.getByParent(req.token, req.params.id).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});
