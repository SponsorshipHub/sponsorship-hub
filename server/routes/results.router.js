const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET router for results
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in /results GET');
    
});//end get Router


module.exports = router;