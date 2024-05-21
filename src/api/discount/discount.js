const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

router.get('/getDiscountCodes',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().execute("dbo.sp_discounts");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
});

router.post('/insertDiscountCode',async (req,res) => {
    //@discountcode varchar(50),
//@discountamount DECIMAL(10,2)
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().input('discountcode',req.body.discountcode).input('discountamount',req.body.discountamount).execute("dbo.sp_insertDiscount");
        res.status(200).send({ message: "Discount Code Added Successfully!" });
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
});

module.exports = router;