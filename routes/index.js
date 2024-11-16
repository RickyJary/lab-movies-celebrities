const router = require("express").Router();

const { 
  createCeleb,
  doCreate

 } = require("../controllers/celebrities.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities/new-celebrity", createCeleb);
router.post("celebrities/new-celebrity", doCreate)

module.exports = router;
