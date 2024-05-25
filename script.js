require("dotenv").config();
const nodemailer = require('nodemailer');

// Company names and HR emails
const companyName = ['CompanyName1', 'CompanyName2'];
const hrEmail = ['hr1@email.com', 'hr2@email.com'];

// Email configuration
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();
// console.log('accessToken', accessToken);


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    }
});


// Function to send email to each HR
async function sendEmail(companyName, hrEmail) {
    try {
        // Email content
        const mailOptions = {
            from: process.env.EMAIL, // Your email
            to: hrEmail,
            subject: 'Your E-mail Subject',
            html: `
                <p>Your E-mail Template</p>
            `
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${hrEmail} for ${companyName}: ${info.response}`);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Iterate through each company and send email
for (let i = 0; i < companyName.length; i++) {
    sendEmail(companyName[i], hrEmail[i]);
}


