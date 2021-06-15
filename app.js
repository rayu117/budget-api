const express = require("express");
const cors = require("cors")
const app = express();


//Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app!");
});

module.exports = app;