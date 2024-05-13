// const express = require('express');
// const app = express(); 
// const port = 3000; 
// const sql = require('mssql'); 
// const customers = require('./src/api/Customers'); 
// const bodyParser = require('body-parser'); 
// const products = require('./src/api/Products/product');

// const smalltaginfo = require('./src/api/SmallTagInfos/smalltaginfo');
// const config = require('./config/configDB');
// const connectionStatus = require('./src/api/Connection Status/connectionStatus');

// // Use body-parser middleware
// app.use(express.json());


// //smalltaginfo
// app.use('/api/smalltaginfo', smalltaginfo);
// //customer
// app.use('/api/customers', customers);
// //products
// app.use('/api/products', products);
// //connection status
// app.use('/api/db-connection-status', connectionStatus);


// sql.connect(config).then(pool => {
//     // store the connection pool in the app object
//     app.set('dbPool', pool);
  
//     console.log("Database connection successful!");
// }).catch(err => {
//     console.log("Error while connecting to database: ", err);
//     process.exit(1);
// });


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// if (!process.env.VERCEL) {
//     const port = 3000;
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   }

//   module.exports = app;

// Existing imports...
const express = require('express');
const app = express(); 
const sql = require('mssql'); 
const config = require('./config/configDB');

// ...

// Connect to the database and store the connection pool in the app object
sql.connect(config).then(pool => {
    app.set('dbPool', pool);
    console.log("Database connection successful!");

    // Define your routes after the database connection is established
    const customers = require('./src/api/Customers'); 
    const products = require('./src/api/Products/product');
    const smalltaginfo = require('./src/api/SmallTagInfos/smalltaginfo');
    const connectionStatus = require('./src/api/Connection Status/connectionStatus');

    // Use express.json middleware
    app.use(express.json());

    // Routes
    app.use('/api/customers', customers);
    app.use('/api/products', products);
    app.use('/api/db-connection-status', connectionStatus);
    app.use('/api/smalltaginfo', smalltaginfo);

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    if (!process.env.VERCEL) {
        const port = 3000;
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
}).catch(err => {
    console.log("Error while connecting to database: ", err);
    process.exit(1);
});