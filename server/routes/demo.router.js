const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST routes gender, income, age, residency
 */
//gender
router.post('/gender', (req, res) => {
    console.log('in gender demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_gender 
    (event_id, gender_id, percentage) 
    VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4);`;
     pool.query(queryText, [req.body.id, req.body.gender1, req.body.gender2, req.body.gender3])
     .then(result => {
         res.sendStatus(200);
     }).catch (error => {
         console.log('post gender Demo route has error', error);
         res.sendStatus(500);
     })
});

//income
router.post('/income', (req, res) => {
    console.log('in income demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_income
    (event_id, income_range_id, percentage)
    VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4), ($1, 4, $5), ($1, 5, $6), ($1, 6, $7), ($1, 7, $8);`;
    pool.query(queryText, [req.body.id, req.body.income1, req.body.income2, req.body.income3, req.body.income4, req.body.income5, req.body.income6, req.body.income7,])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//age
router.post('/age', (req, res) => {
    console.log('in age demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_age
    (event_id, age_range_id, percentage)
     VALUES ($1, 1, $2), ($1, 2, $3), ($1, 3, $4), ($1, 4, $5), ($1, 5, $6), ($1, 6, $7), ($1, 7, $8);`;
    pool.query(queryText, [req.body.id, req.body.age1, req.body.age2, req.body.age3, req.body.age4, req.body.age5, req.body.age6, req.body.age7])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//residency
router.post('/resident', (req, res) => {
    console.log('in resident demo POST req.body:', req.body);
    const queryText = `INSERT INTO junction_event_residency 
    (event_id, residency_id, percentage) 
    VALUES ($1, 1, $2), ($1, 2, $3);`;
    pool.query(queryText, [req.body.id, req.body.resident1, req.body.resident2])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//     
//     INSERT INTO junction_event_age
//     (event_id, age_range_id, percentage)
//     VALUES ($1, 1, $12), ($1, 2, $13), ($1, 3, $14), ($1, 4, $15), ($1, 5, $16), ($1, 6, $17), ($1, 7, $18);
//     INSERT INTO junction_event_residency
//     (event_id, residency_id, percentage)
//     VALUES ($1, 1, $19), ($1, 2, $20);`;
//     pool.query(queryText, 
//         [req.body.id, 
//         req.body.gender1, req.body.gender2, req.body.gender3,
//         
//         ,
//         ])
//         .then( result => {
//             res.sendStatus(200);
//         }).catch (error => {
//             console.log('post Demo route has error', error);
//             res.sendStatus(500);
            
//         })

    


module.exports = router;