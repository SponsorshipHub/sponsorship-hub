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
router.get('/:id', (req, res) => {
    let query = `
    SELECT e.*, et.type, v.*, json_agg(DISTINCT jsonb_build_object('sponsorship_id', s.id, 'sponsor_name', s.sponsor_name, 'sponsor_price', s.sponsor_price, 'sponsor_image_url', s.sponsor_image_url, 'sponsor_description', s.sponsor_description)) AS sponsorship, json_agg(DISTINCT jsonb_build_object('age_range_id', jea.age_range_id, 'age_percentage', jea.percentage, 'age_range', ar.age_range)) AS age, json_agg(DISTINCT jsonb_build_object('gender_id', g.id, 'gender', g.gender, 'gender_percentage', jeg.percentage)) AS gender, json_agg(DISTINCT jsonb_build_object('income_range_id', ir.id, 'income_range', ir.income_range, 'income_percentage', jei.percentage)) AS income, json_agg(DISTINCT jsonb_build_object('residency_id', r.id, 'residency', r.residency, 'residency_percentage', jer.percentage)) AS residency
    FROM event AS e
    FULL JOIN junction_event_type AS jet
    ON e.id = jet.event_id
    FULL JOIN event_type AS et
    ON jet.type_id = et.id
    FULL JOIN venues AS v
    ON e.venue_id = v.id
    FULL JOIN junction_event_age AS jea
    ON e.id = jea.event_id
    FULL JOIN age_range AS ar
    ON jea.age_range_id = ar.id
    FULL JOIN junction_event_gender AS jeg
    ON e.id = jeg.event_id
    FULL JOIN gender AS g
    ON jeg.gender_id = g.id
    FULL JOIN junction_event_income AS jei
    ON e.id = jei.event_id
    FULL JOIN income_range AS ir
    ON jei.income_range_id = ir.id
    FULL JOIN junction_event_residency AS jer
    ON e.id = jer.event_id
    FULL JOIN residency AS r
    ON jer.residency_id = r.id
    FULL JOIN sponsorships AS s
    ON e.id = s.event_id
    WHERE e.id = $1
    GROUP BY e.id, v.id, et.type;
    `
    let id = req.params.id;    

    pool.query(query, [id]).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});


/**
 * POST ONE New Event
 */
router.post('/create/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
    // console.log('Received from client, req.body:', req.body, 'req.params.id:',req.params.id)
    const venue_id = req.params.id;
    const r = req.body;
    const query = `INSERT INTO "event" (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_notes, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_description, venue_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id`
    pool.query(query, [
        r.event_name, r.year_established, r.start_date, r.end_date, r.event_image_url, r.event_website, r.event_status, r.estimated_attendance, r.event_notes, r.contact_name, r.contact_title, r.contact_email, r.contact_phone, r.event_facebook, r.event_twitter, r.event_instagram, r.event_description, venue_id
    ]).then(result => {
        console.log('New Event ID is:',result.rows[0])
        res.send(result.rows[0]);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;