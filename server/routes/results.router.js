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

    /// if NONE of the inputs are filled bring most recent events
    if(location === 'null' && start === 'null' && end === 'null'){
        let queryString = `
            SELECT * FROM "event"
            ORDER BY "start_date" DESC;
            `;
        pool.query(queryString).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500)
        });//end query string
    }; //end if for now
});//end get Router


module.exports = router;