const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('in sponsor GET req.params.id:', req.params.id);
    const queryText = `SELECT * FROM sponsorships WHERE event_id = $1 ORDER BY sponsor_price;`;
    pool.query(queryText, [req.params.id])
    .then(results => res.send(results.rows))
    .catch(error => {
        console.log('Errror retrieving Sponsors', error);
        res.sendStatus(500);
        
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;