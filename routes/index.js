const router = require("express").Router();

const { 
  createCeleb,
  doCreate,
  listCeleb

 } = require("../controllers/celebrities.controllers");

const { 
  createMovie,
  doCreateMovie,
  listMovie
 } = require("../controllers/movies.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// CELEBRITIES
router.get("/celebrities/new-celebrity", createCeleb);
router.post("/celebrities/new-celebrity", doCreate)
router.get("/celebrities/celebrities", listCeleb)

//MOVIES

router.get("/movies/new-movie", createMovie);
router.post("/movies/new-movie", doCreateMovie);
router.get("/movies/movies", listMovie)

module.exports = router;
