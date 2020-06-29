const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]


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

/**
 * PUT routes gender, income, age, residency
 */
// gender PUT
router.put(`/edit`, rejectUnauthenticated, rejectLevel1, async (req, res) => {
let demo = req.body;
console.log('in demo.router gender PUT, req.body:', demo);
const sendDemo = await pool.connect();
try{
    await sendDemo.query('BEGIN');
    let query = `UPDATE junction_event_gender SET percentage = $1 WHERE event_id=$2 AND gender_id = $3;`;
    await sendDemo.query(query, [demo.female, demo.event_id, 1]);
    await sendDemo.query(query, [demo.male, demo.event_id, 2]);
    await sendDemo.query(query, [demo.other, demo.event_id, 2]);
    let query = `UPDATE junction_event_income SET percentage = $1 WHERE event_id=$2 and income_range_id = $3;`;
    await sendDemo.query(query, [demo.Income0_24999, demo.event_id, 1]);
    await sendDemo.query(query, [demo.Income25000_49999, demo.event_id, 2]);
    await sendDemo.query(query, [demo.Income50000_74999, demo.event_id, 3]);
    await sendDemo.query(query, [demo.Income75000_99999, demo.event_id, 4]);
    await sendDemo.query(query, [demo.Income100000_149999, demo.event_id, 5]);
    await sendDemo.query(query, [demo.Income150000_199999, demo.event_id, 6]);
    await sendDemo.query(query, [demo.Income200000, demo.event_id, 7]);
    let query = `UPDATE junction_event_age SET percentage = $1 WHERE event_id=$2 and age_range_id = $3;`;
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 1]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 2]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 3]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 4]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 5]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 6]);
    await sendDemo.query(query, [demo.Age0_17, demo.event_id, 7]);
    let query = `UPDATE junction_event_age SET percentage = $1 WHERE event_id=$2 and residency_id = $3;`;
    await sendDemo.query(query, [demo.in_state, demo.event_id, 1]);
    await sendDemo.query(query, [demo.out_of_state, demo.event_id, 2]);
    await sendDemo.query('COMMIT');
    res.sendStatus(200);
} catch {
    console.log(`ROLLBACK:`, err);
    await sendDemo.query("ROLLBACK");
    throw err;
}finally{
    sendDemo.release();
}
})

module.exports = router;