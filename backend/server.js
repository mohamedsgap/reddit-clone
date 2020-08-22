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

app.get("/api/comments/:id", (req, res) => {
  comments.get(req.token, req.params.id).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.put("/api/comments/:id", bodyParser.json(), (req, res) => {
  comments.edit(req.token, req.params.id, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.post("/api/comments", bodyParser.json(), (req, res) => {
  comments.add(req.token, req.body).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.post("/api/comments/:id", bodyParser.json(), (req, res) => {
  const { option } = req.body;
  comments.vote(req.token, req.params.id, option).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

app.delete("/api/comments/:id", (req, res) => {
  comments.disable(req.token, req.params.id).then(
    (data) => res.send(data),
    (error) => {
      console.error(error);
      res.status(500).send({
        error: "There was an error.",
      });
    }
  );
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static("frontend/build"));

  // Express will serve up the index.html file
  // if doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});
