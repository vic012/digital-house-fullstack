const { roundToNearestMinutes } = require('date-fns');
const express = require('express');
const routes = express.Router();
const produtoController = require('../controllers/produtoController');

routes.get('/adicionar/:nome/:preco/:quantidade/:codigo', produtoController.getProduto);

routes.get('/comprar/produto', produtoController.getQuery);

module.exports = routes;