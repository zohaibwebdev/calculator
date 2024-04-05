require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { initApp } = require("./config/app-setup");
const { calculatorRouter } = require("./routes/calculator.routes.cjs");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", calculatorRouter);

app.get("/", (req, res) => {
  res.send("server is running again");
});

initApp(app);
