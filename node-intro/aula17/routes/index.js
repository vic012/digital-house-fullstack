var express = require('express');
var router = express.Router();
const CardControlle = require('../controller/CardControlle')

/* GET home page. */
router.get('/', CardControlle.index);

module.exports = router;
