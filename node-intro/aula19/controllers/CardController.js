const { cards } = require("../data/card")

module.exports = {
  index(req, res, next) {
    res.render('index', { cards });
  }
}