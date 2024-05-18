//router 
const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');


router.use('/getCustomers', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().execute("dbo.customer_vu");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);

router.post('/addCustomer', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
       //example of how to add a customer
    //    EXEC customer_insert 
    // @customerName = 'Shammas Khan',
    // @customerEmail = 'skspawnpersonal@gmail.com',
    // @customerNum = '0345-0491-621',
    // @customerAddress = '21st Street Street karachi';
        const result = await pool.request()
            .input('customerName', sql.VarChar, req.body.customerName)
            .input('customerEmail', sql.VarChar, req.body.customerEmail)
            .input('customerNum', sql.VarChar, req.body.customerNum)
            .input('customerAddress', sql.VarChar, req.body.customerAddress)
            .execute("dbo.customer_insert");
        res.status(200).send({ message: "Customer Added Successfully!" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
}
);

module.exports = router;