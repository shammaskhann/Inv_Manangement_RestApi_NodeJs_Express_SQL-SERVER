const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

router.get('/getPurchaseOrder', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().execute("dbo.sp_purchaseOrder");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);

// exec UpdatePurchaseOrderPaymentStatus @PurchaseOrderID INT
router.get('/UpdatePurchaseOrderPaymentStatus/:PurchaseOrderID', async (req, res) => {
    const { PurchaseOrderID } = req.params;
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
            .input('PurchaseOrderID', sql.Int, PurchaseOrderID)
            .execute("dbo.UpdatePurchaseOrderPaymentStatus");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
}
);

// exec UpdatePurchaseOrderStatus @PurchaseOrderID INT
router.get('/UpdatePurchaseOrderStatus/:PurchaseOrderID', async (req, res) => {
    const { PurchaseOrderID } = req.params;
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
            .input('PurchaseOrderID', sql.Int, PurchaseOrderID)
            .execute("dbo.UpdatePurchaseOrderStatus");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);
module.exports = router;