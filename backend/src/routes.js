const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');
const SessionController = require('./controller/SessionController');
const MessageController = require('./controller/MessageController');
const ConsultorController = require('./controller/ConsultorController');
const LoginController = require('./controller/LoginController');

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);

routes.post('/sessions', SessionController.login);

routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.create);

routes.get('/consultor', ConsultorController.index);
routes.post('/consultor', ConsultorController.create);

routes.post('/login', LoginController.login);

module.exports = routes;