const routerUser = require('express').Router();

const {Register,Print,Login,PositionFor} = require('../Controllers/controller.user');

routerUser.post('/register', Register);
routerUser.get('/printUsers',Print);
routerUser.post('/HRLogin',Login);
routerUser.get('/getpositionFor',PositionFor)

module.exports = routerUser

