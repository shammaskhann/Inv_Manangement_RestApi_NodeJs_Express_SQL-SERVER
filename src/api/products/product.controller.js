const express = require('express');
const router = express.Router();
const productService = require('./product.services');

//Define route to fetch product as a filter low to high 
router.get("/lowtohighAllProducts", async (req, res) => {
    try {
        const products = await productService.fetchProductsAsc();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;