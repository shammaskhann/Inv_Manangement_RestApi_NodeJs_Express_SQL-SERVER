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
    console.log("exec dbo.sp_inventory");
    try {
        const result = await pool.request().execute("dbo.sp_inventory");
        console.log(result.recordset);
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
        console.log("exec sp_inventory_by_category")

        const result = await pool.request()
            .input('CategoryID', sql.Int, CategoryID)
            .execute('sp_inventory_by_category');
        console.log(result.recordset);
        res.status(200).send(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    } finally {
        await pool.close();
    }
});
module.exports = router;