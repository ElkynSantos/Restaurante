import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import AppError from '../utilities/app.error.js';
import db from '../db.js';

const tokenVerification = async (req, res, next) => {
    // ? Check if the _token exists
    // let _token;
    // if (
    //     req.headers.authorization &&
    //     req.headers.authorization.startsWith('Bearer')
    // ) {
    //     _token = req.headers.authorization.split(' ')[1];
    // }

    // console.log(req.cookies._token);

    const { _token } = req.cookies;

    if (!_token) {
        return next(new AppError('El usuario no ha ingresado', 401));
    }

    // ? Validate if the _token is valid

    try {
        const decoded = await promisify(jwt.verify)(
            _token,
            process.env.JWT_SECRET
        );

        // ? Check if the user still exists in the database

        //TODO: Stored Procedure Validation
        const [userValidation] = await db.query(
            'CALL get_user(:userID, :opt)',
            {
                replacements: {
                    userID: decoded.id,
                    opt: 1,
                },
            }
        );

        if (userValidation.status !== 1) {
            return next(new AppError(`Usuario no existe`, 401));
        }

        //TODO: Acceso a la siguiente ruta

        next();
    } catch (error) {
        let errorType =
            error.message == 'invalid signature'
                ? 'Token Invalido'
                : 'Token Vencido';
        return next(new AppError(errorType, 401));
    }
};

export { tokenVerification };
