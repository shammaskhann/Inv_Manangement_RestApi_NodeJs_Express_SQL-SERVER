
const sql = require('mssql');
const config = require('../../../config/configDB');
const express = require('express');
const router = express.Router();

router.get('/lowtohighAllProducts',async (req,res) => {
    // const pool = req.app.get('dbPool');
    // if (!pool) {
    //     return res.status(500).send({message: "Database connection not available"});
    // }
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().execute("dbo.lowToHighProductFilter");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}) ;

router.get('/getTop5SellingProduct',async (req,res) => {
    // const pool = req.app.get('dbPool');
    // if (!pool) {
    //     return res.status(500).send({message: "Database connection not available"});
    // }
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        //Select * from dbo.GetTopSellingProducts();
        const result= await pool.request().query("Select * from dbo.GetTopSellingProducts()");
        res.status(200).send(result.recordset);     
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    }
}
);


module.exports = router;