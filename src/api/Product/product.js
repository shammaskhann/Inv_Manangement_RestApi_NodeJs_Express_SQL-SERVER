

const express = require('express');
const router = express.Router();

router.get('/lowtohighAllProducts',async (req,res) => {
    const pool = req.app.get('dbPool');
    if (!pool) {
        return res.status(500).send({message: "Database connection not available"});
    }
    try{
        const result= await pool.request().execute("dbo.lowToHighProductFilter");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}) ;

router.get('/getTop5SellingProduct',async (req,res) => {
    const pool = req.app.get('dbPool');
    if (!pool) {
        return res.status(500).send({message: "Database connection not available"});
    }
    try{
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);


module.exports = router;