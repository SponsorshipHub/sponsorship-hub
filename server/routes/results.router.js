const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET router for DEFAULT results on load
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in /results GET default');
    let queryString = `
        SELECT * FROM "event"
        ORDER BY "start_date" DESC;
    `;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /results GET default:', error);
        res.sendStatus(500);
    });//end pool query 
});// end default get ROUTER

//GET router for search results
router.get('/:state/:start/:end', rejectUnauthenticated, (req, res) => {
    console.log('in /results GET', req.params.state, 'start:', req.params.start, 'end:', req.params.end);
    let state = req.params.state;
    let start = req.params.start;
    let end = req.params.end;
    // if statements with multiple pool queries for search

    /// --- LANDING PAGE
    /// if NONE of the inputs are filled bring most recent events
    if (state === 'null' && start === 'null' && end === 'null') {
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
    /// if state is filled and start and end is not
    else if (state !== 'null' && start === 'null' && end === 'null') {
        console.log('state has been defined but not start and end for RESULTS');
        let queryString = `
            SELECT * FROM "event"
            JOIN venues ON venues.id = event.venue_id
            WHERE state ILIKE $1;
        `;
        pool.query(queryString, [`%${state}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end query
    }
    /// if state is empty but start date and end date is filled
    else if (state === 'null' && start !== 'null' && end !== 'null') {
        console.log('state has not been defined but start and end has for RESULTS');
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

// GET router for ADVANCED SEARCH FILTER
router.get('/:state/:start/:end/:type/:minAttend/:maxAttend/:minSponsor/:maxSponsor', rejectUnauthenticated, (req, res) => {
    console.log('in /results for advanced search GET');
    let state = req.params.state
    let start = req.params.start
    let end = req.params.end
    let type = req.params.type
    let minAttend = req.params.minAttend
    let maxAttend = req.params.maxAttend
    let minSponsor = req.params.minSponsor
    let maxSponsor = req.params.maxSponsor
    // TEST SEARCH USING IF STATEMENT
    if (state === '' || start === '' || end === '' || type === '' || minAttend === '' || maxAttend === '' || minSponsor === '' || maxSponsor === ''){
        let queryString = `
    SELECT event.id, event_name, start_date, end_date, city, state, event_image_url, "type", estimated_attendance, json_agg(DISTINCT jsonb_build_object('sponsor_price', sponsorships.sponsor_price)) AS sponsorships
    FROM "event"
    JOIN venues ON venues.id=event.venue_id
    JOIN sponsorships ON event.id=sponsorships.event_id
    JOIN junction_event_income ON "event".id = junction_event_income.event_id
    JOIN junction_event_type ON junction_event_type.event_id = event.id
    JOIN event_type ON junction_event_type.type_id = event_type.id
    WHERE state = $1
    AND start_date >= $2
    AND end_date <= $3
	AND type_id = $4
	AND estimated_attendance >= $5
	AND estimated_attendance <= $6
	AND sponsor_price >= $7
	AND sponsor_price <= $8
    GROUP BY "event".id, venues.city, venues.state, event_type.type
    ;`
        pool.query(queryString, [state, `%${start}%`, `%${end}%`, type, minAttend, maxAttend, minSponsor, maxSponsor]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error with advanced filter results:', error);
            res.sendStatus(500);
        });//end pool query
    }//end if statement
});//end GET router for Advanced Search


module.exports = router;