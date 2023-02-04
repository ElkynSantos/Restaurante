//TODO: Librerias importadas

import jwt from 'jsonwebtoken';

//TODO: Funciones programadas
import AppError from '../utilities/app.error.js';
import db from '../db.js';
import { comparePassword } from '../utilities/handle.bcrypt.js';

const signToken = (id, rol, name) => {
    return jwt.sign({ id, rol, name }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const login = async (req, res, next) => {
    try {
        const { user, userPassword } = req.body;

        if (!user || !userPassword) {
            return next(
                new AppError(
                    `El usuario o la contraseña no pueden ir vacíos`,
                    400
                )
            );
        }

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

        const jwtToken = signToken(
            userExists.id,
            userExists.rol,
            userExists.name
        );

        return res.status(200).json({
            status: 'Ok',
            jwtToken,
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
