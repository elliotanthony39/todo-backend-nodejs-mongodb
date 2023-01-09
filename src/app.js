require("dotenv").config();
const express = require("express");
const routes = require("./routes/index.routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(routes);

module.exports = app;
