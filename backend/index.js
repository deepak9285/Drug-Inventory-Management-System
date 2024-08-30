const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/user");

const cors = require("cors");
require("dotenv").config();

const { db_connect } = require("./config/db");
db_connect();
app.use(cors({ origin: "http://localhost:3000" }));
app.get("/", (req, res) => {
  res.json("Api is running");
});
app.use(express.json());
app.use("/users", routes);
app.listen(process.env.PORT || 5000, console.log("server is running"));
