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
