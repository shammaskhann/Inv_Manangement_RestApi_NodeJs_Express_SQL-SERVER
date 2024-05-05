//  handles business logic
const Customer = require('./customers.model');

class CustomersService {
    static async fetchAll() {
        try {
            const customers = await Customer.fetchAll();
            return customers;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        }
    }
    static async create(customerData) {
        try {
            const newCustomer = await Customer.create(customerData);
            return newCustomer;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        }
    }

    static async update(id, customerData) {
        try {
            const updatedCustomer = await Customer.update(id, customerData);
            return updatedCustomer;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        }
    }

    static async delete(id) {
        try {
            await Customer.delete(id);
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        }
    }
}

module.exports = CustomersService;