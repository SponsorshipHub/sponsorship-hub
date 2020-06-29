const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

/**
 * GET route template
 */
router.get('/gender/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
console.log('in demo GET req.params.id:', req.params.id);
});

//  This would be where i need to write the get route if I'm not using oneEvent
// const queryText = `SELECT  FROM
// junction_event_gender junction_event_income junction_event_age junction_event_residency 


/**
 * POST routes gender, income, age, residency
 */
//gender
router.post('/gender', rejectUnauthenticated, rejectLevel1, (req, res) => {
    console.log('in gender demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_gender 
    (event_id, gender_id, percentage) 
    VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4);`;
    pool.query(queryText, [req.body.event_id, req.body.female, req.body.male, req.body.other])
     .then(result => {
         res.sendStatus(200);
     }).catch (error => {
         console.log('post gender Demo route has error', error);
         res.sendStatus(500);
     })
});

//income
router.post('/income', rejectUnauthenticated, rejectLevel1, (req, res) => {
    console.log('in income demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_income
    (event_id, income_range_id, percentage)
    VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4), ($1, 4, $5), ($1, 5, $6), ($1, 6, $7), ($1, 7, $8);`;
    pool.query(queryText, [req.body.event_id, req.body.Income0_24999, req.body.Income25000_49999, req.body.Income50000_74999, req.body.Income75000_99999, req.body.Income100000_149999, req.body.Income150000_199999, req.body.Income200000,])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//age
router.post('/age', rejectUnauthenticated, rejectLevel1, (req, res) => {
    console.log('in age demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_age
    (event_id, age_range_id, percentage)
     VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4), ($1, 4, $5), ($1, 5, $6), ($1, 6, $7), ($1, 7, $8);`;
    pool.query(queryText, [req.body.event_id, req.body.Age0_17, req.body.Age18_24, req.body.Age25_34, req.body.Age35_44, req.body.Age45_54, req.body.Age55_64, req.body.Age65])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//residency
router.post('/resident', rejectUnauthenticated, rejectLevel1, (req, res) => {
    console.log('in resident demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_residency 
    (event_id, residency_id, percentage) 
    VALUES ($1, 1, $2), ($1, 2, $3);`;
    pool.query(queryText, [req.body.event_id, req.body.in_state, req.body.out_of_state])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});


    


module.exports = router;