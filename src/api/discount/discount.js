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
        console.log("exec dbo.sp_discounts")

        const result= await pool.request().execute("dbo.sp_discounts");
        console.log(result.recordset);
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
    console.log("exec dbo.CreateDiscountCode");
    try{
        const result= await pool.request().input('discountcode',req.body.discountcode).input('discountamount',req.body.discountamount).execute("dbo.CreateDiscountCode");
        console.log(result.recordset);
        res.status(200).send({ message: "Discount Code Added Successfully!" });
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
});

module.exports = router;