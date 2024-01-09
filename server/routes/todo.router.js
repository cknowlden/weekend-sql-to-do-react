const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
// router.get('/', (req, res) => {
//     res.send('Test');
// });
router.get('/', (req, res) => {
    //res.send(bookList)
    const dbQuery = 'SELECT * FROM "tasks";';
    pool
      .query(dbQuery)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
  });

// POST

// PUT

// DELETE

module.exports = router;
