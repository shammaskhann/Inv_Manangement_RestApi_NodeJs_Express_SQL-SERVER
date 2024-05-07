const Product = require('./product.model');

class ProductService {

    static async fetchProductsAsc() {
        try {
            const products = await Product.fetchLowToHigh();
            return products;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        }
    }
}
module.exports = ProductService;