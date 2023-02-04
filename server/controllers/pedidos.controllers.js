import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

//TODO:  Funciones propias
import db from '../db.js';
import { encrypt } from '../utilities/handle.bcrypt.js';

import userIdGenerator from '../utilities/random.users.js';

const getAllPedidos = async (req, res, next) => {
    try {
        const allUsers = await db.query(`SELECT * FROM bd_res.pedidos;`);

        console.log(allUsers);

        return res.status(200).json({
            status: 'Ok',
            allUsers,
        });
    } catch (error) {
        return next(new AppError(`Ups! Error en la base de datos`, 500));
    }
};
