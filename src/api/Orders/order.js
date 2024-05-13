const express = require('express');
const router = express.Router();

router.get('/orders',async (req,res) => {
    const pool = req.app.get('dbPool');
    try{
        const result= await pool.request().execute("dbo.getOrders");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

router.get('/order/:id',async (req,res) => {
    const pool = req.app.get('dbPool');
    try{
        const result= await pool.request().input('id',req.params.id).execute("dbo.getOrderById");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);
//create order
// router.post('/order',async (req,res) => {
//     const pool = req.app.get('dbPool');
//     try{
//         const result= await pool.request()
//         .input('orderDate',req.body.orderDate)
//         .input('customerId',req.body.customerId)
//         .input('status',req.body.status)
//         .execute("dbo.createOrder");
//         res.status(200).send(result.recordset);
//     }catch(err){
//         res.status(500).send({message: err.message});
//     }
// }
// );

//delete order
router.delete('/order/:id',async (req,res) => {
    const pool = req.app.get('dbPool');
    try{
        const result= await pool.request().input('id',req.params.id).execute("dbo.deleteOrder");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

//update order status
router.put('/order/:id',async (req,res) => {
    const pool = req.app.get('dbPool');
    try{
        const result= await pool.request().input('id',req.params.id).input('status',req.body.status).execute("dbo.updateOrder");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

//get today orders
router.get('/todayOrders',async (req,res) => {
    const pool = req.app.get('dbPool');
    try{
        const result= await pool.request().execute("dbo.getTodayOrders");
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
);

module.exports = router;