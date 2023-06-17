const routerUser = require('express').Router();

const {Register} = require('../Controllers/controller.user')

routerUser.post('/register', Register)

module.exports = routerUser

