const express = require('express');
const router = express.Router();
const config = require('../../../config/configDB');
const sql = require('mssql');


router.get('/', async (req, res) => {
    let dbConnected = false;
    try {
      await new Promise((resolve, reject) => {
        const pool = new sql.ConnectionPool(config, err => {
          if (err) {
            console.log("Error while connecting to database :- " + err);
            reject(err);
          } else {
            pool.connect(err => {
              if (err) {
                console.log("Error while opening the connection: ", err);
                reject(err);
              } else {
                resolve();
              }
            });
          }
        });
      });
      dbConnected = true;
    } catch (err) {
      console.log("Error while checking the database connection: ", err);
    }
    res.send({ dbConnected });
  });

  // router.get('/', async (req, res) => {
//     let dbConnected = false;
//     try {
//         await new Promise((resolve, reject) => {
//             new sql.ConnectionPool(config, err => {
//                 if (err) {
//                     console.log("Error while connecting to database :- " + err);
//                     reject(err);
//                 } else {
//                     dbConnected = true;
//                     console.log("Connection Successful!");
//                     resolve();
//                 }
//             });
//         });
//     } catch (err) {
//         return res.status(500).send({ dbConnected });
//     }
//     res.status(200).send({ dbConnected });
// });

  module.exports = router;