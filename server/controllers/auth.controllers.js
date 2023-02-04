//TODO: Librerias importadas

import jwt from 'jsonwebtoken';

//TODO: Funciones programadas
import AppError from '../utilities/app.error.js';
import db from '../db.js';
import { comparePassword } from '../utilities/handle.bcrypt.js';

const login = async (req, res, next) => {
    try {
        const { user, userPassword } = req.body;

        const [userExists] = await db.query(
            'CALL user_authentication(:userName)',
            {
                replacements: {
                    userName: user,
                },
            }
        );

        if (userExists.response === 0) {
            return next(new AppError(userExists.msg, 401));
        }

        const rightPassword = await comparePassword(
            userPassword,
            userExists.password
        );

        if (!rightPassword) {
            return next(new AppError(`Usuario o contraseña invalidos`, 401));
        }

        return res.status(200).json({
            status: 'Ok',
            msg: `¡Bienvenido al sistema, ${userExists.name}!`,
        });
    } catch (error) {
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

const resetPassword = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

const logout = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

export { login, resetPassword, logout };
