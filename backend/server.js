require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const categories = require("./categories");
const posts = require("./posts");
const comments = require("./comments");

const app = express();
