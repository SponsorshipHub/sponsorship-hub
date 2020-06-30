const express = require('express');
const router = express.Router();
//require api key for sendgrid
const dotenv = require('dotenv');
//Using sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

dotenv.config();

//post route to send data to the email
router.post('/', (req, res) => {
    const msg = {
       
    }
})

module.exports = router;





