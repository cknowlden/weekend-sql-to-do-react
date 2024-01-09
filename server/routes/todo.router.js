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
router.post('/', (req, res) => {
    const newTask = req.body;
    const queryText = `INSERT INTO "tasks" ("name", "completed")
    VALUES
      ($1, $2);`;
    const queryArgs = [
      newTask.name,
      newTask.completed,
    ];
  
    pool
      .query(queryText, queryArgs)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('ERROR:', err);
  
        res.sendStatus(500);
      });
  });

// PUT

// DELETE

module.exports = router;
