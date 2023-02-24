import nodemailer from 'nodemailer';

const forgotPassordEmail = async (options) => {
    // ? Transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        },
    });

    // ? Define the email options

    const { email, name, token } = options;

    const mailOptions = {
        from: 'Garifunas Food <garifunas@gmail.com>',
        to: email,
        subject: 'Cambio de contraseña',
        text: 'Confirma el cambio de tu contraseña',
        html: contentHTML,
        attachments: [
            {
                filename: 'logo.png',
                path: `Proyecto Facturacion/public/assets/images/logo.png`,
                cid: 'logo',
            },
            {
                filename: 'palm-blue.webp',
                path: `server/public/assets/palm-blue.png`,
                cid: 'palm-blue',
            },
        ],
    };

    // ? 3 Send the email

    await transporter.sendMail(mailOptions);
};

export { forgotPassordEmail };
