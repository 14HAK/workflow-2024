/*
    1. basic server with modular system
    2. set .env environment
    3. total User management(resister, login,, nodemailer, forgat-password, reset-password)
    4. 
*/

/*
  //* src/utils/email.ts
  //* nodemailer sent email
import nodemailer from 'nodemailer';

const sendEmail = async (options: {
    email: string;
    subject: string;
    message: string;
}) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: 'Your Name <your-email@example.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmail;
*/
