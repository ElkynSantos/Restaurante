//TODO: Librerias importadas

import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

//TODO:  Funciones propias
import db from '../db.js';
import { encrypt } from '../utilities/handle.bcrypt.js';

import { userIdGenerator, generateToken } from '../utilities/random.users.js';

const allUsers = async (req, res, next) => {
    try {
        const allUsers = await db.query(`CALL get_all_users()`);

        return res.status(200).json({
            status: 'Ok',
            allUsers,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError(`Ups! Error en la base de datos`, 500));
    }
};

const createUser = async (req, res, next) => {
    //TODO: Parametros necesarios para crear un usuario
    try {
        const {
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
            password,
        } = req.body;

        console.log(
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
            password
        );

        const emptyParams = Object.values({
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
            password,
        }).some((val) => !val);

        if (emptyParams) {
            return next(
                new AppError(`Por favor complete todos los campos`, 401)
            );
        }

        //TODO: Funcion para generar usuarios aleatorios

        const userName = userIdGenerator(
            name,
            lastName,
            new Date().getDate().toString()
        );

        //TODO: Función para encriptación de passwords

        const hashedPass = await encrypt(password);

        //TODO: Función para crear random tokens

        const token = generateToken();

        //TODO: Función para creación de usuarios

        const [newUser] = await db.query(
            'CALL new_user(:userName, :userLastName, :userId, :rol, :userDni, :userGender, :userBirthday, :placeOfBirth, :userPhone, :userEmail, :userPass, :userToken)',
            {
                replacements: {
                    userName: name,
                    userLastName: lastName,
                    userId: userName,
                    rol: rol,
                    userDni: integerSanitizer(dni),
                    userGender: gender,
                    userBirthday: birthday,
                    placeOfBirth: placeofBirth,
                    userPhone: integerSanitizer(phone),
                    userEmail: email,
                    userPass: hashedPass,
                    userToken: token,
                },
            }
        );

        if (newUser.response === 0) {
            return next(new AppError(newUser.msg, 400));
        }

        return res.status(201).json({
            status: 'Ok',
            msg: 'Se ha creado el nuevo usuario exitosamente',
            newUser,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError(`Ha ocurrido un error en el servidor`, 500));
    }
};

const getUser = async (req, res) => {
    const { userID } = req.body;
    
    const [user] = await db.query('CALL get_user(:userID, :opt)', {
        replacements: {
            userID,
            opt: 1,
        },
    });

    if (user.response === 0) {
        return res.status(404).json({
            status: 'fail',
            msg: user.msg,
        });
    }

    return res.status(200).json({
        status: 'Ok',
        user,
    });
};

const updateUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const {
            userIdDb,
            userStatus,
            userName,
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
        } = req.body;

        const emptyParams = Object.values({
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
        }).some((val) => !val);
        
        if (emptyParams) {
            return next(
                new AppError(`Por favor complete todos los campos`, 400)
            );
        }

        const [updatedUser] = await db.query(
            'CALL edit_user(:id ,:userStatus ,:userName, :userLastName, :userId, :rol, :userDni, :userGender, :userBirthday, :placeOfBirth, :userPhone, :userEmail)',
            {
                replacements: {
                    id: userIdDb,
                    userStatus,
                    userName: name,
                    userLastName: lastName,
                    userId: userName,
                    rol: rol,
                    userDni: integerSanitizer(dni),
                    userGender: gender,
                    userBirthday: birthday,
                    placeOfBirth: placeofBirth,
                    userPhone: integerSanitizer(phone),
                    userEmail: email,
                },
            }
        );

        if (updatedUser.response === 0) {
            return next(new AppError(updatedUser.msg, 401));
        }

        return res.status(200).json({
            status: 'Ok',
            msg: updatedUser.msg,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

const editUserStaus = async (req, res, next) => {
    try {
        const { opt, userDni } = req.body;

        console.log("status-type", typeof opt, "userDni-type", typeof userDni);
        console.log("status", opt, "userDni", userDni);
        if (opt == null || opt == undefined || userDni == null || userDni == undefined) {
            return next(new AppError(`No se permiten campos vacios`, 400));
        }

        const [changeUserStatus] = await db.query(
            `CALL edit_user_status(:opt, :userDni)`,
            {
                replacements: {
                    opt: opt,
                    userDni: userDni,
                },
            }
        );

        if (changeUserStatus.response === 0) {
            return next(new AppError(changeUserStatus.msg, 404));
        }

        return res.status(200).json({
            status: 'Ok',
            msg: changeUserStatus.msg,
        });
    } catch (error) {
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

const updatePassword = async (req, res, next) => {
    try {
        const { token, newPassword } = req.body;

        const hashedPass = await encrypt(newPassword);
        const [passwordUpdated] = await db.query(
            'CALL update_password(:token, :updatedPassword)',
            {
                replacements: {
                    token: token,
                    updatedPassword: hashedPass,
                },
            }
        );
        return res.status(200).json({
            status: 'Ok',
            msg: passwordUpdated.msg,
        });
    } catch (error) {
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

export {
    allUsers,
    createUser,
    getUser,
    updateUser,
    editUserStaus,
    updatePassword,
};
