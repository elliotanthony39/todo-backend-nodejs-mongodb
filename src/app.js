require("dotenv").config();
const express = require("express");
const routes = require("./routes/index.routes");
const morgan = require("morgan");

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(routes);

module.exports = app;
