const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controller/transactionsController.js");

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app!");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

module.exports = app;
