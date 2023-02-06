import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

import db from '../db.js';

const getTaxes = async (req, res, next) => {
    try 
    {
        const allTaxes = await db.query('SELECT Desc_Impuesto, Porcentaje FROM bd_restaurante.impuestos;');

        console.log(allTaxes);

        return res.status(200).json({
            status: 'Ok',
            allRoles: allTaxes,
        });
    } catch (error)
    {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}