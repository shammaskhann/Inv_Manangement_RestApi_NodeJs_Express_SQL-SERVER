

const express = require('express');
const router = express.Router();

router.get('/lowtohighAllProducts',async (req,res) => {
    const pool = await req.app.get('dbPool');
    try{
        const result= await pool.request().execute("dbo.lowToHighProductFilter");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}) ;


module.exports = router;