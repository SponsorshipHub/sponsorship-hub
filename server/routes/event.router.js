const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let query = `
    SELECT e.*, et.type, v.*, json_agg(DISTINCT jsonb_build_object('sponsorship_id', s.id, 'sponsor_name', s.sponsor_name, 'sponsor_price', s.sponsor_price, 'sponsor_image_url', s.sponsor_image_url, 'sponsor_description', s.sponsor_description)) AS sponsorship, json_agg(DISTINCT jsonb_build_object('age_range_id', jea.age_range_id, 'age_percentage', jea.percentage, 'age_range', ar.age_range)) AS age, json_agg(DISTINCT jsonb_build_object('gender_id', g.id, 'gender', g.gender, 'gender_percentage', jeg.percentage)) AS gender, json_agg(DISTINCT jsonb_build_object('income_range_id', ir.id, 'income_range', ir.income_range, 'income_percentage', jei.percentage)) AS income, json_agg(DISTINCT jsonb_build_object('residency_id', r.id, 'residency', r.residency, 'residency_percentage', jer.percentage)) AS residency
    FROM event AS e
    JOIN junction_event_type AS jet
    ON e.id = jet.event_id
    JOIN event_type AS et
    ON jet.type_id = et.id
    JOIN venues AS v
    ON e.venue_id = v.id
    JOIN junction_event_age AS jea
    ON e.id = jea.event_id
    JOIN age_range AS ar
    ON jea.age_range_id = ar.id
    JOIN junction_event_gender AS jeg
    ON e.id = jeg.event_id
    JOIN gender AS g
    ON jeg.gender_id = g.id
    JOIN junction_event_income AS jei
    ON e.id = jei.event_id
    JOIN income_range AS ir
    ON jei.income_range_id = ir.id
    JOIN junction_event_residency AS jer
    ON e.id = jer.event_id
    JOIN residency AS r
    ON jer.residency_id = r.id
    JOIN sponsorships AS s
    ON e.id = s.event_id
    WHERE e.id = $1
    GROUP BY e.id, v.id, et.type;
    `

});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;