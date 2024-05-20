const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../../../config/configDB');

//Api to Get Order Accoriding to the Period ( coming in param)
router.get('/getOrderAccToParam/:period',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{
        const result= await pool.request().input('Period',req.params.period).execute("dbo.getOrders");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}
);

// insert order 
// DECLARE @productIDs AS ProductQuantity;

// INSERT INTO @productIDs (productID, quantity)
// VALUES (1, 2), (2, 3);  -- Replace with actual product IDs and quantities

// EXEC dbo.order_insert
//     @orderDate = '2022-01-01',
//     @customerID = 1,  -- Replace with actual customer ID
//     @discountCode = 'DISCOUNT10',  -- Replace with actual discount code
//     @fulfillmentStatus = 'Fulfilled',
//     @fulfilledDate = '2022-01-02',
//     @salesChannelID = 1,  -- Replace with actual sales channel ID
//     @giftCard = 0,
//     @paymentMethod = 'Credit Card',
//     @paymentDate = '2022-01-01',
//     @paymentStatus = 'Paid',
//     @shipperID = 1,  -- Replace with actual shipper ID
//     @productIDs = @productIDs;

router.post('/insertOrder',async (req,res) => {
    const pool = new sql.ConnectionPool(config, err => {
        if (err) {
            console.log("Error while connecting to database :- " + err);
            throw err;
        }
        console.log("Connection Successful!");
    });
    await pool.connect();
    try{

         // Create a new table and define its structure
         const table = new sql.Table();
         table.columns.add('productID', sql.Int);
         table.columns.add('quantity', sql.Int);
 
         // Populate the table with data
         req.body.productIDs.forEach(item => {
             table.rows.add(item.productID, item.quantity);
         });

        const result= await pool.request()
        .input('orderDate',req.body.orderDate)
        .input('customerID',req.body.customerID)
        .input('discountCode',req.body.discountCode)
        .input('fulfillmentStatus',req.body.fulfillmentStatus)
        .input('fulfilledDate',req.body.fulfilledDate)
        .input('salesChannelID',req.body.salesChannelID)
        .input('giftCard',req.body.giftCard)
        .input('paymentMethod',req.body.paymentMethod)
        .input('paymentDate',req.body.paymentDate)
        .input('paymentStatus',req.body.paymentStatus)
        .input('shipperID',req.body.shipperID)
        .input('productIDs',table)
        .execute("dbo.order_insert");
        res.status(200).send({ message: "Product Added Successfully!" });
    }catch(err){
        res.status(500).send({message: err.message});
    }finally{
        await pool.close();
    
    }
}               
);

module.exports = router;