//TODO: Librerias importadas

import jwt from 'jsonwebtoken';

//TODO: Funciones programadas
import AppError from '../utilities/app.error.js';
import db from '../db.js';
import { forgotPassordEmail } from '../utilities/nodemailer.config.js';
import { comparePassword, encrypt } from '../utilities/handle.bcrypt.js';
import { generateToken } from '../utilities/random.users.js';

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
            return next(new AppError(userExists.msg, 404));
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

const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        const hashedPass = await encrypt(newPassword);

        const [updatedPass] = await db.query(
            'CALL update_password(:userToken, :updatedPassword)',
            {
                replacements: {
                    userToken: token,
                    updatedPassword: hashedPass,
                },
            }
        );

        if (updatedPass.response === 0) {
            return res.status(404).json({
                status: 'fail',
                msg: updatedPass.msg,
            });
        }

        res.status(201).json({
            status: 'ok',
            msg: updatedPass.msg,
        });
    } catch (error) {
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

const sendResetPassEmail = async (req, res) => {
    const { email } = req.body;

    const token = generateToken();

    const [userID] = await db.query(
        'CALL reset_password_email(:userID, :userToken)',
        {
            replacements: {
                userID: email,
                userToken: token,
            },
        }
    );

    if (userID.response === 0) {
        return res.status(404).json({
            status: 'fail',
            message: userID.msg,
        });
    }

    forgotPassordEmail({
        email: userID.email,
        name: userID.name,
        token: token,
    });

    res.status(200).json({
        status: 'ok',
        message: userID.msg,
    });
};

const logout = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

export { login, resetPassword, sendResetPassEmail, logout };
