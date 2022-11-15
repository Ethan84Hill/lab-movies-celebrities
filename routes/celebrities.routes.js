// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celeb = require('../models/Celebrity.model.js')

// all your routes here
router.get("/create", (req, res, next) => {
    res.render("../views/celebrities/new-celebrity.hbs");
  });

router.post('/create', (req, res, next) => {
    console.log(req.body)
    Celeb.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
        .then(createdCeleb => {
            console.log('i created a celebrity', createdCeleb);
            // res.send(createdCeleb);
            res.redirect('/')
        })
        .catch(err => {
            res.redirect('/new-celebrity')
            res.send(err)
        })
})

 router.get('/celebrities', (req, res, next) => {
    Celeb.find()
    .then(celebrities => {
        console.log(celebrities)
        res.render('celebrities/celebrities', { celebrities})
    })
    .catch(err => console.log(err))
 })

module.exports = router;