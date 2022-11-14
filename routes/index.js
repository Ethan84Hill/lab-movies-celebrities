const router = require("express").Router();
const Celebs = require('./celebrities.routes')
const Movies = require('./movies.routes')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/celebrities/new-celebrity.hbs', (req, res, next) => {
  res.render('./celebrities.routes.js')
})





module.exports = router;
