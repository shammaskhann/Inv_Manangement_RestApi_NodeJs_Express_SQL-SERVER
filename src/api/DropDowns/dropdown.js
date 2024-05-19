const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');
const { route } = require('../Customers/customers');


// Select * from getShipperDropDown()
// Select * from getCustomerDropDown()
// Select * from getProductsDropDown()
// Select * from getDiscountCodeDropDown()
// Select * from getGiftCardDropDown()

router.get('/getShipperDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getShipperDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

router.get('/getCustomerDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getCustomerDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

router.get('/getProductsDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getProductsDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

router.get('/getDiscountCodeDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getDiscountCodeDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

router.get('/getGiftCardDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getGiftCardDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

router.get('/getSalesChannelDropDown',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().query("Select * from dbo.getSaleChannelDropDown()");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);
module.exports = router;