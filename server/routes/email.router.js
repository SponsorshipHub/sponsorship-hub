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
    console.log('sending to email has worked:', req.body.email)
    let email = req.body.email;
    let name = req.body.name;
    const msg = {
        //sending to the user who just registered
       to: email,
       //from sponsorship hub -- in this case for our project will be lamportkn@gmail.com
       from: 'lamportkn@gmail.com',
       subject: 'Sponsorship Hub Membership Approval',
       text: `Hello ${name}, please wait for your approval. Our admin at Sponsorship Hub will get back to you as soon as possible. Thank You.`
    };
    sgMail.send(msg).then((result) => {
        console.log('Success sending the email to the new user:', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error sending the email:', error);
        res.sendStatus(500);
    });
});//end post route

module.exports = router;





