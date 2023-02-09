import AppError from '../utilities/app.error.js';

import db from '../db.js';

const getAllRoles = async (req, res, next) => {
    try {
        const allRoles = await db.query(
            'SELECT Desc_Permiso FROM bd_restaurante.permisos;'
        );

        console.log(allRoles);

        return res.status(200).json({
            status: 'Ok',
            allRoles,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};
