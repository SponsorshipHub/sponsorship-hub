const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* ROUTE FOR CreateEvent.jsx VENUES */
/* GET ROUTE for ALL VENUES */
router.get('/', (req, res) => {
    let query = `SELECT * FROM venues;`;
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
router.post('/', (req, res) => {

});

module.exports = router;