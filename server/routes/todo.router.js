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
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const task = req.body;
    //const queryText = `UPDATE "tasks" SET "completed" = $1 WHERE "id" = $2;`;
    const queryText = `UPDATE "tasks" SET "completed" = NOT "completed" WHERE "id" = $2;`;
    pool
        .query(queryText, [task.description, id])
        .then(() => {
            res.sendStatus(200);
          })
          .catch((err) => {
            console.log('ERROR:', err);
            res.sendStatus(500);
        });
    });

// DELETE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    pool
        .query(queryText, [id])
        .then(() => {
            res.sendStatus(200);
          })
          .catch((err) => {
            console.log('ERROR:', err);
            res.sendStatus(500);
        });
    });

module.exports = router;
