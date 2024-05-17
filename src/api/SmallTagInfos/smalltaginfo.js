const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');


//get no of orders today 
router.get('/getNoOfOrdersToday',async (req,res) => {
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
        const result= await pool.request().execute("dbo.getTodayOrders");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

//get Total Sales Today
router.get('/getTotalSalesToday',async (req,res) => {
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
        const result= await pool.request().execute("dbo.getTodaySales");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

// get Total Revenue
router.get('/getTotalRevenue',async (req,res) => {
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
        const result= await pool.request().query("exec getTotalRevenue");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

// get Total Products
router.get('/getTotalProducts',async (req,res) => {
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
        const result= await pool.request().execute("dbo.getTotalProducts");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

// //get order count in past 7 days
router.get('/getOrderCountPastWeek',async (req,res) => {
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
        const result= await pool.request().execute("dbo.GetOrderCountInPast7Days");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    }
}
);


module.exports = router;