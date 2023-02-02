import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

const allUsers = (req, res) => {
    return next(new AppError(`Esta ruta aún no está implementada`, 500));
};

const createUser = (req, res, next) => {
    // * Parametros necesarios para crear un usuario

    try {
        const {
            name,
            rol,
            img,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
            docs,
        } = req.body;

        if (!name) {
            return next(new AppError(`El nombre no puede ir vacío`, 401));
        }

        return res.status(200).json({
            status: 'Ok',
            msg: 'Se ha creado el nuevo usuario exitosamente',
            name,
            rol,
            img,
            dni: integerSanitizer(dni),
            gender,
            birthday,
            placeofBirth,
            phone: integerSanitizer(phone),
            email,
            docs,
        });
    } catch (error) {
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
