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
router.get('/users', rejectUnauthenticated, (req, res) => {
    let query = `
    SELECT id, username, name, title, company, phone, access_level
    FROM "user";`

    console.log(`IN ADMIN!`);
    
    pool.query(query).then(results => {
        console.log(results.rows);
        res.send(results.rows)
    }).catch(err => {
        console.log(`ERROR in ADMIN:`, err);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;