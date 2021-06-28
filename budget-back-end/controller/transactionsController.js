//DEPENDENCIES
const express = require("express");
const transactions = express.Router();
const transationsArray = "../models/transaction.js";

//CONFIGURATION
const validateUrl = (req, res, next) => {
  const http = "http://";
  const https = "https://";
  var fullUrl = req.protocol + "://" + req.get("host") + req.url;
  console.log(`[development] Request URL: ${fullUrl}`);
  if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

const validateBody = (req, res, next) => {
  const { date, name, amount } = req.body;
  if (name === undefined ||
    date === undefined ||
    amount === undefined) {
    res.redirect("/404");
  } else {
    next();
  }
  
};

transactions.use(validateBody);
//ROUTES
transactions.get("/", (req, res) => {
  res.status(200).json(transationsArray);
});

transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transationsArray[index]) {
    res.status(200).json(transationsArray[index]);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", validateBody, (req, res) => {
  transactions.push(req.body);
  res.json(transationsArray[transationsArray.length - 1]);
});

transactions.put("/:index", validateBody, (req, res) => {
  const { index } = req.params;
  if (transationsArray[index]) {
    transationsArray[index] = req.body;
    res.json(transationsArray[index]);
  } else {
    res.redirect("/404");
  }
});

transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transationsArray[index]) {
    const deleted = transationsArray.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.redirect("/404");
  }
});
//EXPORT
module.exports = transactions;
