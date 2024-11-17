const Movie = require('../models/Movie.model');
const Celebrity = require("../models/Celebrity.model")

module.exports.createMovie = (req, res, next) => {
    Celebrity.find()
     .then((celebs) => {
         res.render('movies/new-movie', { celebs })
     })
}

module.exports.doCreateMovie = (req, res, next) => {
    console.log(req.body)
    Movie.create(req.body)
    .then((createdMovie)=>{
        console.log(createdMovie);
        res.redirect('/movies/movies')
    })
}

module.exports.listMovie = (req, res, next) => {
    Movie.find()
    .populate("cast")
    .then(movies =>res.render("movies/movies", { movies }))
    .catch(err => next(err))
}