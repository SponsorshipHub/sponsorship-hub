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
console.log('in sponsor POST req.body:', req.body);
const queryText = `INSERT INTO sponsorships 
(sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id ) 
VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.sponsor_name, req.body.sponsor_price, req.body.sponsor_image_url, req.body.sponsor_description, req.body.id,])
    .then( result => {
        res.sendStatus(200);
    }).catch (error => {
        console.log(error);
        res.sendStatus(500);      
    })
});

module.exports = router;