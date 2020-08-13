const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Body Parser  Middleware

app.use(bodyParser.json());

// Connect to mongoDB
const db = require("./config/keys").mongoURI;

//Connection to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on ${port}`));
