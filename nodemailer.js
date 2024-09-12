// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: "organizers@icamt2024.com",
        pass: "admin1234#"
    }
});

// Configure the mailoptions object
const mailOptions = {
    from: 'organizers@icamt2024.com',
    to: 'shrish108@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});