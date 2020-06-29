const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

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
    // if all inputs are filled search
    else if (state !== 'null' && start !== 'null' && end !== 'null') {
        console.log('all inputs have been filled for RESULTS');
        let queryString = `
        SELECT * FROM "event"
        JOIN venues ON venues.id = event.venue_id
        WHERE state ILIKE $1
        AND start_date >= $2
        AND end_date <= $3
        `;
        pool.query(queryString, [`%${state}%`, `%${start}%`, `%${end}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        })//end pool query
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
            WHERE start_date BETWEEN $1 AND $2
            OR end_date BETWEEN $1 AND $2;
        `;
        pool.query(queryString, [`%${start}%`, `%${end}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end pool query
    }
});//end get Router for results landing page

// : state /: start /: end /: type /: minAttend /: maxAttend /: minSponsor /: maxSponsor
// GET router for ADVANCED SEARCH FILTER
router.get('/filter', rejectUnauthenticated, rejectLevel1, (req, res) => {
    console.log('TEST MEEEEEE', req.query)

    let state = ''
    let start = '1753-01-01'
    let end = '3000-12-31'
    let type = ''
    let minAttend = 0
    let maxAttend = 2147483647
    let minSponsor = 0
    let maxSponsor = 2147483647
    // console.log('in /results for advanced search GET', state, start, end, type, minAttend, maxAttend, minSponsor, maxSponsor);
    // TEST SEARCH USING IF STATEMENT


    if (req.query.state) {
        state = req.query.state;
    }
    if (req.query.startD) {
        start = req.query.startD;
    }
    if (req.query.endD) {
        end = req.query.endD;
    }
    if (req.query.type != '') {
        type = req.query.type;
    }
    if (req.query.minAttend) {
        minAttend = req.query.minAttend;
    }
    if (req.query.maxAttend) {
        maxAttend = req.query.maxAttend;
    }
    if (req.query.minSponsorPrice) {
        minSponsor = req.query.minSponsorPrice;
    }
    if (req.query.maxSponsorPrice) {
        maxSponsor = req.query.maxSponsorPrice;
    }

    let results = [`%${state}%`, start, end, `%${type}%`, minAttend, maxAttend, minSponsor, maxSponsor];

    let queryString = `
    SELECT event.id, event_name, start_date, end_date, city, state, event_image_url
    FROM "event"
    FULL JOIN venues ON venues.id=event.venue_id
    FULL JOIN sponsorships ON event.id=sponsorships.event_id
    FULL JOIN junction_event_income ON "event".id = junction_event_income.event_id
    FULL JOIN junction_event_type ON junction_event_type.event_id = event.id
    FULL JOIN event_type ON junction_event_type.type_id = event_type.id
    WHERE state ILIKE $1
    AND start_date BETWEEN $2 AND $3
    AND end_date BETWEEN $2 AND $3
	AND type ILIKE $4
	AND estimated_attendance >= $5
	AND estimated_attendance <= $6
	AND sponsor_price >= $7
	AND sponsor_price <= $8
    GROUP BY "event".id, venues.city, venues.state, event_type.type
    ;`
    pool.query(queryString, results).then((result) => {
        // console.log('HELLOOOOO', result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log('error with advanced filter results:', error);
        res.sendStatus(500);
    });//end pool query
});//end GET router for Advanced Search

//GET router for SEARCH results
router.get('/search', rejectUnauthenticated, (req, res) => {
    let search = req.query.event_name
    console.log('in /results GET default');
    let queryString = `
        SELECT * FROM "event"
        WHERE event_name ILIKE $1
        ORDER BY "start_date" DESC;
    `;
    pool.query(queryString, [`%${search}%`]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /results GET default:', error);
        res.sendStatus(500);
    });//end pool query 
});// end SEARCH get ROUTER

module.exports = router;