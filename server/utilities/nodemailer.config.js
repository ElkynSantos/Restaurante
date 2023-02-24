import nodemailer from 'nodemailer';

const forgotPassordEmail = async (options) => {
    // ? Transporter
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        },
    });

    // ? Define the email options

    const { email, name, token } = options;

    let contentHTML = `
            <div class="message-container" style="width: 45rem;background-color: #fdfad3;border-radius: 1rem;overflow: hidden;">
            <div class="message-header" style="position: relative;background-color: #2d2f94;padding: 1rem;color: white;font-weight: bold;">
               <img class="brand-logo" src="cid:logo" alt="" style="width: 6rem;height: auto;position: absolute !important;right: 1rem;top: 50%;transform: translateY(-50%);">
               <span style="padding-left: 1.5rem;"> ¡Hola ${name}!</span>
            </div>
            <div class="message-body" style="padding: 1.5rem;"> 
               <p><b>Se ha solicitado un correo de cambio de contraseña.</b></p>
               
               <p>Para completar el proceso, por favor haz click en el siguiente enlace: 
        <a href="${process.env.BACKEND_URL}:${
        process.env.PORT ?? 3000
    }/auth/reset-password/${token}"> Cambiar Contraseña</a></p>
               
               <p>Si no has solicitado un cambio de contraseña, por favor ignora este correo.</p>
               
               <p>Saludos,</p>
               <p class="text-blue" style="color: #2d2f94;">
                  <img class="brand-signature" src="cid:palm-blue" alt="" style="height: 2rem;">
                  <b>Garifunas Food</b>
               </p>
            </div>
         </div>
         `;

    const mailOptions = {
        from: 'Garifunas Food <garifunas@gmail.com>',
        to: email,
        subject: 'Cambio de contraseña',
        text: 'Confirma el cambio de tu contraseña',

    };

    // ? 3 Send the email

    await transporter.sendMail(mailOptions);
};

export { forgotPassordEmail };
