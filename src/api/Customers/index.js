//router 
const express = require('express');
const router = express.Router();
const customersController = require('./customers.controller');

router.use('/', customersController);

module.exports = router;