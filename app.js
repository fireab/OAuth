const express = require("express");
const authRoutes = require("./routes/auth-routes.js");

const app = express();

//setup routes
app.use("/auth", authRoutes);

// set view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app now listening for requests on port 3000");
});
