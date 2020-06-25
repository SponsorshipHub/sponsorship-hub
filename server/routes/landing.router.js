const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET router for the landing page to display limit 6 events
router.get('/', (req, res) => {
    console.log('in /landing GET');
    let queryString = `
        SELECT * FROM "event"
        ORDER BY "start_date" 
        DESC LIMIT 6;
        ;`
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in /landing GET:', error);
        res.sendStatus(500);
    })
});//end get router for landing page

module.exports = router;