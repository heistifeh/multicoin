// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Or another email service
//     auth: {
//         user: 'seriki1farou@gmail.ciom',
//         pass: '12Disintergration' // Use environment variables for sensitive info
//     }
// });

// nodemailer.createTransport({
//     pool: true,
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // use TLS
//     auth: {
//         user: 'seriki1farou@gmail.ciom',
//         pass: 'owfj zgke sivf uxat' // Use environment variables for sensitive info
//     },
// });

// export async function sendWelcomeEmail(user) {
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'farouqseriki7@gmail.com', // The recipient email
//         subject: `Welcome to my Test app Mr `, //${user.email}
//         text: `Hello greetings Mr Man, Welcome to my test app`,
//         html: `<p>Hello greetings Mr Man,</p><p>Welcome to my test app</p>`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Welcome email sent successfully');
//     } catch (error) {
//         console.error('Error sending welcome email:', error);
//     }
// }