const routerMail = require('express').Router()

const {EmailAccepted,EmailRefused} = require('../Controllers/controller.mail')

routerMail.post('/sendMailAccepted',EmailAccepted)

routerMail.post('/sendMailRefused',EmailRefused)

module.exports = routerMail