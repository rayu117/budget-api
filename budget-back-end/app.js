const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controller/transactionsController.js")

//Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app!");
});

app.use("/transactions", );

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

module.exports = app;
