const express = require("express");
const authRoutes = require("./routes/auth-routes.js");
const passportSetup = require("./config/passport-setup.js");
const mongoose = require("mongoose");
const keys = require("./config/keys.js");

const app = express();

//setup routes
app.use("/auth", authRoutes);

// connect to mongodb
mongoose
  .connect(keys.mongodb.dbURL)
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.error(error);
  });

// set view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app now listening for requests on port 3000");
});
