const clone = require("clone");
const config = require("./config");

let db = {};

const defaultData = {
  categories: [
    {
      name: "react",
      path: "react",
    },
    {
      name: "redux",
      path: "redux",
    },
    {
      name: "javascript",
      path: "javascript",
    },
    {
      name: "nodejs",
      path: "nodejs",
    },
  ],
};

function getData(token) {
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getAll(token) {
  return new Promise((res) => {
    res(getData(token));
  });
}

module.exports = {
  getAll,
};
