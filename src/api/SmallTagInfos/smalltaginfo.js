const express = require('express');
const router = express.Router();

//get no of orders today 
router.get('/getNoOfOrdersToday',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        console.log("Executing getNoOfOrdersToday");
        console.log("Procedure: exec getNoOfOrdersToday");
        const result= await pool.request().execute("dbo.getTodayOrders");
        console.log("Result: ",result.recordset);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

//get Total Sales Today
router.get('/getTotalSalesToday',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        console.log("Executing getTotalSalesToday");
        console.log("Procedure: exec getTodaySales");
        const result= await pool.request().execute("dbo.getTodaySales");
        console.log("Result: ",result.recordset);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

// get Total Revenue
router.get('/getTotalRevenue',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        console.log("Executing getTotalRevenue");
        console.log("Procedure: exec getTotalRevenue");
        const result= await pool.request().execute("dbo.getTotalRevenue");
        console.log("Result: ",result.recordset);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

// get Total Products
router.get('/getTotalProducts',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        console.log("Executing getTotalProducts");
        console.log("Procedure: exec getTotalProducts");
        const result= await pool.request().execute("dbo.getTotalProducts");
        console.log("Result: ",result.recordset);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

//get order count in past 7 days
router.get('/getOrderCountPast7Days',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        console.log("Executing getOrderCountPast7Days");
        console.log("Procedure: exec GetOrderCountInPast7Days");
        const result= await pool.request().execute("dbo.GetOrderCountInPast7Days");
        console.log("Result: ",result.recordset);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);



module.exports = router;