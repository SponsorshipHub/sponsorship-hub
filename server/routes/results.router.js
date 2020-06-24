const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET router for results
router.get('/:location/:start/:end', rejectUnauthenticated, (req, res) => {
    console.log('in /results GET', req.params.location, 'start:', req.params.start, 'end:', req.params.end);
    let location = req.params.location;
    let start = req.params.start;
    let end = req.params.end;
    // if statements with multiple pool queries for search

    /// --- LANDING PAGE
    /// if NONE of the inputs are filled bring most recent events
    if (location === 'null' && start === 'null' && end === 'null') {
        console.log('none of the inputs have been fille for RESULTS');
        let queryString = `
            SELECT * FROM "event"
            ORDER BY "start_date" DESC;
            `;
        pool.query(queryString).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500)
        });//end query
    }
    /// if location is filled and start and end is not
    else if (location !== 'null' && start === 'null' && end === 'null') {
        console.log('location has been defined but not start and end for RESULTS');
        let queryString = `
            SELECT * FROM "event"
            JOIN venues ON venues.id = event.venue_id
            WHERE state ILIKE $1;
        `;
        pool.query(queryString, [`%${location}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end query
    }
    /// if location is empty but start date and end date is filled
    else if (location === 'null' && start !== 'null' && end !== 'null') {
        console.log('location has not been defined but start and end has for RESULTS');
        let queryString = `
            SELECT * FROM "event"
            WHERE "start_date" >= $1 
            AND "end_date" <= $2;
        `;
        pool.query(queryString, [`%${start}%`, `%${end}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end pool query
    }
});//end get Router for results landing page


module.exports = router;