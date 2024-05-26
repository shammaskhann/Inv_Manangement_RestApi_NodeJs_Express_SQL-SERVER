const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

//get payemnt details with order id

router.get('/getPayment/:id', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().input('OrderID', req.params.id).execute("dbo.GetPaymentDetails");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);
//EXEC UpdatePaymentStatus @OrderID = 32, @NewStatus = 'Paid';  
router.put('/updatePaymentStatus/:id', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().input('OrderID', req.params.id).input('NewStatus', req.body.NewStatus).execute("dbo.UpdatePaymentStatus");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);

module.exports = router;