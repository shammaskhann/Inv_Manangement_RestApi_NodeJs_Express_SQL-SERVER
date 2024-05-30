const express = require('express');
const app = express();  
const cors = require('cors');
const sql = require('mssql'); 
const customers = require('./src/api/Customers/customers'); 
const products = require('./src/api/Product/product');
const smalltaginfo = require('./src/api/SmallTagInfos/smalltaginfo');
const config = require('./config/configDB');
const connectionStatus = require('./src/api/Connection Status/connectionStatus');
const graphCharts = require('./src/api/Graph-Charts/graph-charts');
const order = require('./src/api/Orders/order');
const shippers = require('./src/api/Shippers/shippers');
const suppliers = require('./src/api/Suppliers/suppliers');
const saleschannel = require('./src/api/Sales Channel/saleschannel');
const inventory = require('./src/api/Inventory/inventory');
const purchaseOrder = require('./src/api/Purchase Order/purchase_order');
const invoices = require('./src/api/Invoices/invoices');
const dropdown = require('./src/api/DropDowns/dropdown');
const discount = require('./src/api/discount/discount');
const payemnt = require('./src/api/Payment/payments');
const shipment = require('./src/api/Shipments/shipments');

// Use body-parser middleware
app.use(express.json());
//adds the CORS middleware to your server, which will automatically include the appropriate headers in the response.
app.use(cors());

 app.use('/api/smalltaginfo', smalltaginfo);
 app.use('/api/customers', customers);
 app.use('/api/products', products);
 app.use('/api/db-connection-status', connectionStatus);
 app.use('/api/graph-charts', graphCharts);
 app.use('/api/orders', order);
  app.use('/api/shippers', shippers);
  app.use('/api/suppliers', suppliers);
  app.use('/api/saleschannel', saleschannel);
  app.use('/api/inventory', inventory);
  app.use('/api/purchaseOrder', purchaseOrder);
  app.use('/api/invoices', invoices);
  app.use('/api/dropdown', dropdown);
  app.use('/api/discount', discount);
  app.use('/api/payment', payemnt);
  app.use('/api/shipment', shipment);



  sql.connect(config).then(pool => {
    // store the connection pool in the app object
    app.set('dbPool', pool);

   

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