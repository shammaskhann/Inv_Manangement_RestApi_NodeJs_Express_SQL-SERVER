//straight forward call api no MVC 

const express = require('express');
const router = express.Router();
const productController = require('./product.controller');

router.use('/', productController);

module.exports = router;