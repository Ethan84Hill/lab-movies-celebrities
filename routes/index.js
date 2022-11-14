const router = require("express").Router();
const Celebs = require('./celebrities.routes')
const Movies = require('./movies.routes')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});







module.exports = router;
