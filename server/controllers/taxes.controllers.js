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

const addTax = async (req, res, next) => {
    try{
        const{
            descripcion_impuesto,
            porcentaje_impuesto,
        } = req.body;

        const emptyParams = Object.values({
            descripcion_impuesto,
            porcentaje_impuesto,
        }).some((val) => !val);

        if (emptyParams){
            return next(new AppError('Favor completar todos los campos', 401));
        }

        const [newTax] = await db.query('INSERT INTO db_restaurante.impuestos (descripcion_impuesto, porcentaje_impuesto) VALUES ?, ?', [descripcion_impuesto, porcentaje_impuesto]);

        return res.status(200).json({
            status: 'Ok',
        });
    } catch(error){
        console.log(error);
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}