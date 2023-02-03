//TODO: Librerias importadas

import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

//TODO:  Funciones propias
import db from '../db.js';
import { encrypt } from '../utilities/handle.bcrypt.js';

import userIdGenerator from '../utilities/random.users.js';

const allUsers = async (req, res, next) => {
    try {
        const allUsers = await db.query(`CALL get_all_users()`);

        return res.status(200).json({
            status: 'Ok',
            allUsers,
        });
    } catch (error) {
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
            token,
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
            password,
            token,
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
            dni,
            new Date().getDate().toString()
        );

        //TODO: Función para encriptación de passwords

        const hashedPass = await encrypt(password);

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
            return next(new AppError(newUser.msg, 401));
        }

        return res.status(200).json({
            status: 'Ok',
            msg: newUser.msg,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError(`Ha ocurrido un error en el servidor`, 500));
    }
};

const getUser = (req, res) => {
    return next(new AppError(`Esta ruta aún no está implementada`, 500));
};

const updateUser = (req, res) => {
    return next(new AppError(`Esta ruta aún no está implementada`, 500));
};

const deleteUser = (req, res) => {
    return next(new AppError(`Esta ruta aún no está implementada`, 500));
};

export { allUsers, createUser, getUser, updateUser, deleteUser };
