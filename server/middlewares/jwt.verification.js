import AppError from '../utilities/app.error.js';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

const tokenVerification = async (req, res, next) => {
    // ? Check if the token exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('El usuario no ha ingresado', 401));
    }

    // ? Validate if the token is valid

    try {
        const decoded = await promisify(jwt.verify)(
            token,
            process.env.JWT_SECRET
        );

        // ? Check if the user still exists in the database

        //TODO: Estoy implementando la busqueda del usuario
    } catch (error) {
        let errorType =
            error.message == 'invalid signature'
                ? 'Token Invalido'
                : 'Token Vencido';
        return next(new AppError(errorType, 401));
    }
};

export { tokenVerification };
