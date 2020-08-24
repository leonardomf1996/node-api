const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota para retornar todos os produtos
routes.get('/products', ProductController.index);

// Rota para retornar um unico produto
routes.get('/products/:id', ProductController.show);

// Rota para add produto
routes.post('/products', ProductController.store);

// Rota para alterar produto
routes.put('/products/:id', ProductController.update);

// Rota para deletar produto
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;