const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

router.get('/getInventory', async (req, res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try {
        const result = await pool.request().execute("dbo.sp_inventory");
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();

    }
}
);
router.get('/inventory/:CategoryID', async (req, res) => {
    const { CategoryID } = req.params;
    const pool = new sql.ConnectionPool(config);
    await pool.connect();
    try {
        const result = await pool.request()
            .input('CategoryID', sql.Int, CategoryID)
            .execute('sp_inventory_by_category');
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
});
module.exports = router;