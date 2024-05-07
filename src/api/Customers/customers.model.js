// interacts with the database or query

const sql = require('mssql');
//  {
//    "CustomerID": 2,
//    "CustomerName": "Jane Smith",
//    "Email": "jane.smith@example.com",
//    "Location": "Los Angeles",
//    "Phone": "0987654321",
//    "AmountSpent": 2000.75,
//    "NoOfOrders": 10
//   }

const config = require('../../../configuration');
class Customer {
    static async fetchAll() {
        const pool = new sql.ConnectionPool(config, err => {
                if (err) {
                    console.log("Error while connecting to database :- " + err);
                    throw err;
                }
                console.log("Connection Successful!");
            });
        await pool.connect();
        try {
            const result = await pool.request().query("SELECT * FROM Customer");
            return result.recordset;
        } catch (err) {
            console.error("Error executing query:", err);
            throw err;
        } finally {
            await pool.close();
        }
    }

    static async create(customerData) {
        const pool = new sql.ConnectionPool(config, err => {
                if (err) {
                    console.log("Error while connecting to database :- " + err);
                    throw err;
                }
                console.log("Connection Successful!");
            });
        await pool.connect();
        try {
            const result = await pool.request().query(`INSERT INTO Customer (CustomerName, Email, Location, Phone, AmountSpent, NoOfOrders) VALUES ('${customerData.CustomerName}', '${customerData.Email}', '${customerData.Location}', '${customerData.Phone}', ${customerData.AmountSpent}, ${customerData.NoOfOrders})`);
            return result;
        } catch(err) {
            console.error("Error executing query:", err);
            throw err;
        } finally {
            await pool.close();
        }
    }
    
    // // Fetch all customers
    // static async fetchAll() {
    //     try {
    //         const result = await new sql.Request().query("SELECT * FROM Customer");
    //         return result.recordset;
    //     } catch (err) {
    //         console.error("Error executing query:", err);
    //         throw err;
    //     }
    // }
    // static async create(customerData) {
    //     // Implement database logic here
    //     try{
    //         const resultd = await new sql.Request().query(`INSERT INTO Customer (CustomerName, Email, Location, Phone, AmountSpent, NoOfOrders) VALUES ('${customerData.CustomerName}', '${customerData.Email}', '${customerData.Location}', '${customerData.Phone}', ${customerData.AmountSpent}, ${customerData.NoOfOrders})`);
    //     return resultd;
    //     }catch(err){
    //         console.error("Error executing query:", err);
    //         throw err;
        
    //     }
    // }

    // static async update(id, customerData) {
    //     // Implement database logic here
    //     try{
            
    //         const result = await new sql.Request().query(`UPDATE Customer SET CustomerName = '${customerData.CustomerName}', Email = '${customerData.Email}', Location = '${customerData.Location}', Phone = '${customerData.Phone}', AmountSpent = ${customerData.AmountSpent}, NoOfOrders = ${customerData.NoOfOrders} WHERE CustomerID = ${id}`);
    //         return result;
    //     }catch(err){
    //         console.error("Error executing query:", err);
    //         throw err;
        
    //     }
    // }

    // static async delete(id) {
    //     // Implement database logic here
    //     try{
    //         const result = await new sql.Request().query(`DELETE FROM Customer WHERE CustomerID = ${id}`);
    //         return result;
    //     }
    //     catch(err){
    //         console.error("Error executing query:", err);
    //     }
    // }
}

module.exports = Customer;