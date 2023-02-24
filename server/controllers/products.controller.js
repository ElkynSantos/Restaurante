import AppError from '../utilities/app.error.js';

//TODO:  Funciones propias
import db from '../db.js';

const getAllProductos = async (req, res, next) => {
    try {
        const allProductos = await db.query(`CALL get_all_products()`);

        console.log(allProductos[1]);

        return res.status(200).json(allProductos);
    } catch (error) {
        return next(new AppError(`Ups! Error en la base de datos`, 500));
    }
};
export { getAllProductos };
