var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/registrar', UserController.create);
router.post('/registrar', UserController.save);
router.get('/autenticar', UserController.login);

module.exports = router;
