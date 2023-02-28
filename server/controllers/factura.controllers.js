import AppError from '../utilities/app.error.js';

import db from '../db.js';

const getFacturas = async(req,res,next)=>{
    try {
        const allFacturas = await db.query('CALL get_facturas()');
        return res.status(200).json({
            status: 'Ok',
            msg: 'Lista de todos las facturas',
            allFacturas,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

export {
    getFacturas
}