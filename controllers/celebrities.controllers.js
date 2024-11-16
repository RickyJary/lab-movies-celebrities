const Celebrity = require('../models/Celebrity.model');

module.exports.createCeleb = (req, res, next) => {
    res.render('celebrities/new-celebrity')
}
module.exports.doCreate = (req, res, next) => {
    Celebrity.create(req.body)
    .then((createdCeleb) => {
        res.redirect("celebrities")
    })
    .catch(
        res.render('celebrities/new-celebrity')
    );
}