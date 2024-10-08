const passport = require("passport");

const router = require("express").Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("google redirect");
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

module.exports = router;
