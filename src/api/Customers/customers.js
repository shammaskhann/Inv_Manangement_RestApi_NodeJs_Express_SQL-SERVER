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

//customer update
// EXEC dbo.customer_update 
//     @CustomerID = 1, 
//     @Name = 'New Name', 
//     @Email = 'newemail@example.com', 
//     @PhoneNumber = '098-765-4321', 
//     @Address = 'New Address, City, State';

router.post('/updateCustomer', async (req, res) => {
    const { CustomerID, Name, Email, PhoneNumber, Address } = req.body;

    // Check if all fields are provided
    if (!CustomerID || !Name || !Email || !PhoneNumber || !Address) {
        return res.status(400).send({ message: "All fields are required" });
    }

    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request()
            .input('CustomerID', sql.Int, CustomerID)
            .input('Name', sql.VarChar, Name)
            .input('Email', sql.VarChar, Email)
            .input('PhoneNumber', sql.VarChar, PhoneNumber)
            .input('Address', sql.VarChar, Address)
            .execute("dbo.customer_update");
        res.status(200).send({ message: "Customer Updated Successfully!" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
});

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    const pool = new sql.ConnectionPool(config);
    await pool.connect();
    try {
        const result = await pool.request()
            .input('Email', sql.NVarChar, Email)
            .input('Password', sql.NVarChar, Password)
            .execute('LoginCustomer');
        if (result.recordset[0].ErrorMessage) {
            res.status(401).send({ message: result.recordset[0].ErrorMessage });
        } else {
            res.status(200).send(result.recordset[0]);
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
});



module.exports = router;