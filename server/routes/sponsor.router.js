const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route
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


// POST route 
router.post('/', (req, res) => {
console.log('in sponsor POST req.body:', req.body);
const queryText = `INSERT INTO sponsorships 
(sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id ) 
VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.sponsor_name, req.body.sponsor_price, req.body.sponsor_image_url, req.body.sponsor_description, req.body.id,])
    .then( result => {
        res.sendStatus(200);
    }).catch (error => {
        console.log('post route has error', error);
        res.sendStatus(500);      
    })
});


// DELETE ROUTE
router.delete('/:id', (req, res) => {
    console.log('in sponsor.router DELETE, req.params:', req.params);
    const queryText = `DELETE FROM sponsorships WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
     res.sendStatus(200);
 }).catch((error) => {
     console.log('problem in sponsor.router Delete', error);
     res.sendStatus(500);
     
 })    
})

//PUT ROUTE
router.put(`/edit`, (req, res) => {
    console.log('in sponsor.router EDIT, req.body:', req.body);
    const queryText = `UPDATE sponsorships 
    SET sponsor_name = $1, sponsor_price = $2, sponsor_image_url = $3, sponsor_description = $4
    WHERE id = $5;`;
    pool.query(queryText, [req.body.sponsor_name, req.body.sponsor_price, req.body.sponsor_image_url, req.body.sponsor_description, req.body.id ])
    .then ((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('problem in sponsor.router EDIT', error);
        res.sendStatus(500);
        
    })
})


module.exports = router;