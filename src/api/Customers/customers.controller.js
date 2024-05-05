// http or router is defind in the controller 

const express = require('express');
const router = express.Router();
const customersService = require('./customers.service');

// Define route for fetching all customers
router.get("/", async (req, res) => {
    try {
        const customers = await customersService.fetchAll();
        res.status(200).send(customers);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Create a new customer
router.post("/", async (req, res) => {
    try {
        const newCustomer = await customersService.create(req.body);
        res.status(201).send(newCustomer);
        //status 201 means created
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Update a customer
router.put("/:id", async (req, res) => {
    try {
        const updatedCustomer = await customersService.update(req.params.id, req.body);
        res.status(200).send(updatedCustomer);
        //status 200 means ok

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Delete a customer
router.delete("/:id", async (req, res) => {
    try {
        await customersService.delete(req.params.id);
        res.status(204).send();
        //status 204 means no content
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;