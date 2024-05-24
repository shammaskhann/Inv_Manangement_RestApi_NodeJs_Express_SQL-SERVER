const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

router.get('/getShipments', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().execute("dbo.sp_ShipmentTracking");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);

router.get('/getShipment/:id', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().input('OrderID', req.params.id).execute("dbo.GetTrackingDetails");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);
module.exports = router;
