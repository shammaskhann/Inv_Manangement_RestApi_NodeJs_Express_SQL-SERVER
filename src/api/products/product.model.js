const sql = require("mssql");

const config = require('../../../configuration');

class Product {
    //call a procedure name dbo.lowToHighProductFilter
    static async fetchLowToHigh() {
        const pool = new sql.ConnectionPool(config, err => {
            if (err) {
                console.log("Error while connecting to database :- " + err);
                throw err;
            }
            console.log("Connection Successful!");
        });
        await pool.connect();
        try {
            const result = await pool.request().execute("dbo.lowToHighProductFilter");
            return result.recordset;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        } finally {
            await pool.close();
        }
    }
} 
module.exports = Product;