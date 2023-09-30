const nodemailer = require('nodemailer');

// Create a transporter object using your email service's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'msgadekar284@gmail.com',
    pass: '7709286982',
  },
});

// Define the email message
const mailOptions = {
  from: 'gadekarmanish62@gmail.com',
  to: 'msgadekar284@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
