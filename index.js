const express = require('express');
const app = express(); 
const port = 3000; 
const sql = require('mssql'); 
const customers = require('./src/api/Customers'); 
const bodyParser = require('body-parser'); 
const products = require('./src/api/products');
// Use body-parser middleware
app.use(express.json());
app.use(bodyParser.json());

// var config = {
//     "user": "shammas", // Database username
//     "password": "shammas0312", // Database password
//     //"server": "192.168.18.127", // Server IP address
//     "database": "shopify_Clone", // Database name
//     "options": {
//         "encrypt": false // Disable encryption
//     }
// }

//NodeJsApi
//shammas0312
//For database Hosted
var config = {
    "user": "projectbukc_ShopifyClone", // Database username
    "password": "project0312", // Database password
    "server": "sql.bsite.net", // Server name
    "database": "projectbukc_ShopifyClone", // Database name
    "options": {
        "encrypt": true, // Disable encryption
        "instanceName": "MSSQL2016", // Instance name
        "connectionTimeout": 30000,
        "trustServerCertificate": true
    }
}


app.use('/api/customers', customers);
//products
app.use('/api/products', products);



sql.connect(config, err => {
    if (err) {
        console.log("Error while connecting to database :- " + err);
        throw err;
    }
   
    console.log("Connection Successful!");
});


// app.get('/api/db-connection-status', async (req, res) => {
//     let dbConnected = false;
//     const pool = new sql.ConnectionPool(config, err => {
//         if (err) {
//             console.log("Error while connecting to database :- " + err);
//             throw err;
//         }
//         dbConnected = true;
//         console.log("Connection Successful!");
//     });
//     res.status(200).send({ dbConnected });
// });
app.get('/api/db-connection-status', async (req, res) => {
    let dbConnected = false;
    try {
        await new Promise((resolve, reject) => {
            new sql.ConnectionPool(config, err => {
                if (err) {
                    console.log("Error while connecting to database :- " + err);
                    reject(err);
                } else {
                    dbConnected = true;
                    console.log("Connection Successful!");
                    resolve();
                }
            });
        });
    } catch (err) {
        return res.status(500).send({ dbConnected });
    }
    res.status(200).send({ dbConnected });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (!process.env.VERCEL) {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }

  module.exports = app;