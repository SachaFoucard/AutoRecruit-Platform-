const routerUser = require('express').Router();

const {Register,PrintCandidates,LoginHR} = require('../Controllers/controller.user');

//Apply for job (send)
routerUser.post('/register', Register);

//Print applicants of jobs (get)
routerUser.get('/printUsers',PrintCandidates);

//Login HR
routerUser.post('/HRLogin',LoginHR);

module.exports = routerUser

