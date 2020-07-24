const express = require('express');

const UserController = require('./controllers/UserController');
const LanchesController = require('./controllers/LanchesController');
const menuController = require('./controllers/menuController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.get('/menu', menuController.index);

routes.post('/lanches', LanchesController.create);
routes.get('/lanches', LanchesController.index);
routes.delete('/lanches/:id', LanchesController.delete);

module.exports = routes;