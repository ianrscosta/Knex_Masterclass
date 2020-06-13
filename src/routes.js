const express = require('express');

const routes = express.Router();

const usersController = require('./controllers/usersController');
const projectsController = require('./controllers/projectsController');

//Users
routes
    .get('/users', usersController.index)
    .post('/users', usersController.create)
    .put('/users/:id', usersController.update)
    .delete('/users/:id', usersController.delete)

//Projects
    .get('/projects', projectsController.index)
    .post('/projects', projectsController.create)
    .put('/projects/:id', projectsController.update)
    .delete('/projects/:id', projectsController.delete)
module.exports = routes;