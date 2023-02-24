import AppError from '../utilities/app.error.js';

import db from '../db.js';

const getAllRoles = async (req, res, next) => {
    try {
        const allRoles = await db.query(
            'SELECT * FROM ' + process.env.NAME_DB + '.roles;'
        );

        console.log(allRoles);

        return res.status(200).json({
            allRoles,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};
export { getAllRoles };
