const routerUser = require('express').Router();

const {Register,Print,Login} = require('../Controllers/controller.user');

routerUser.post('/register', Register);
routerUser.get('/printUsers',Print);
routerUser.post('/HRLogin',Login);

module.exports = routerUser

