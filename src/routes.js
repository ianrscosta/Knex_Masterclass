const express = require('express');

const routes = express.Router();

const usersController = require('./controllers/usersController');

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

module.exports = routes;