const express = require('express');
const app = express(); 
const port = 3000; 
const sql = require('mssql'); 
const customers = require('./src/api/Customers'); 
const bodyParser = require('body-parser'); 
const products = require('./src/api/Product/product');

const smalltaginfo = require('./src/api/SmallTagInfos/smalltaginfo');
const config = require('./config/configDB');
const connectionStatus = require('./src/api/Connection Status/connectionStatus');

// Use body-parser middleware
app.use(express.json());





// sql.connect(config).then(pool => {
//     // store the connection pool in the app object
//     app.set('dbPool', pool);
//   //smalltaginfo
//  app.use('/api/smalltaginfo', smalltaginfo);
// //customer
//  app.use('/api/customers', customers);
// //products
//  app.use('/api/products', products);
// //connection status
//   app.use('/api/db-connection-status', connectionStatus);
//     console.log("Database connection successful!");
// }).catch(err => {
//     console.log("Error while connecting to database: ", err);
//     process.exit(1);
// });
// Function to connect to the database with retry mechanism
function connectToDatabase(retries = 5) {
    sql.connect(config).then(pool => {
        // store the connection pool in the app object
        app.set('dbPool', pool);

        // Define your routes after the database connection is established
        app.use('/api/smalltaginfo', smalltaginfo);
        app.use('/api/customers', customers);
        app.use('/api/products', products);
        app.use('/api/db-connection-status', connectionStatus);

        console.log("Database connection successful!");
    }).catch(err => {
        console.log("Error while connecting to database: ", err);
        if (retries > 0) {
            console.log(`Retrying in 5 seconds... (${retries} retries left)`);
            setTimeout(() => connectToDatabase(retries - 1), 5000);
        } else {
            console.log("Failed to connect to database after multiple attempts.");
            process.exit(1);
        }
    });
}

// Try to connect to the database
connectToDatabase();

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

// Existing imports...