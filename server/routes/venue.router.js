const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* ROUTE FOR CreateEvent.jsx VENUES */
/* GET ROUTE for ALL VENUES */
router.get('/', (req, res) => {
    let query = `SELECT * FROM venues ORDER by name;`;
    pool.query(query).then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('venue.router.js error:', error)
        alert('Error with GET route in venue.router.js')
    })
});


/**
 * POST route template
 */
router.post('/create', (req, res) => {
    let query = `INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity) VALUES
    ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`;
    pool.query(query, 
        [
            req.body.venue_name, 
            req.body.venue_address, 
            req.body.venue_city, 
            req.body.venue_state, 
            req.body.venue_zipcode, 
            req.body.venue_notes, 
            req.body.venue_capacity
        ]
        ).then((result) => {
        console.log('Venue returned with:', result.rows[0]);
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log('venue.router.js error:', error);
    })
});

module.exports = router;