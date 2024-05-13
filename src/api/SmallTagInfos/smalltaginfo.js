// const express = require('express');
// const router = express.Router();

// //get no of orders today 
// router.get('/getNoOfOrdersToday',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request().execute("dbo.getTodayOrders");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );

// //get Total Sales Today
// router.get('/getTotalSalesToday',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request().execute("dbo.getTodaySales");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );

// // get Total Revenue
// router.get('/getTotalRevenue',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request().execute("dbo.getTotalRevenue");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );

// // get Total Products
// router.get('/getTotalProducts',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request().execute("dbo.getTotalProducts");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );

// //get order count in past 7 days
// router.get('/getOrderCountPast7Days',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request().execute("dbo.GetOrderCountInPast7Days");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );


// module.exports = router;