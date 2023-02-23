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
        html: `

        <p> ¡Hola ${name}!,</p>

        <p>Se ha solicitado un correo de cambio de contraseña</p>

        <p>Para completar el proceso, por favor haz click en el siguiente enlace: 
        <a href="http://localhost:5173/auth/reset-password/${token}"> Cambiar Contraseña</a></p>
        
        <p>Si no has solicitado un cambio de contraseña, por favor ignora este correo</p>

        <p>Saludos,</p>
        <p>Garifunas Food</p>
        `,
    };

    // ? 3 Send the email

    await transporter.sendMail(mailOptions);
};

export { forgotPassordEmail };
