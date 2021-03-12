const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const User = require("./models/userModel");
const routes = require("./routes/index.js");
const cors = require("cors");

require("dotenv").config({
  path: path.join(__dirname, "./.env"),
});

const app = express();
const port = process.env.PORT || 3001;

mongoose
 .connect('mongodb+srv://admin:admin@alshivtest.zklno.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(() => {
  console.log('Connected to the Database successfully');
 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    try {
      const accessToken = req.headers["x-access-token"];
      const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one"
        });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

app.use("/", routes);

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Example app listening at http://localhost:${port}`);
});
