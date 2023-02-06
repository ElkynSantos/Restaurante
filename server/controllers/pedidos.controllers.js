import AppError from '../utilities/app.error.js';

//TODO:  Funciones propias
import db from '../db.js';

const getAllPedidos = async (req, res, next) => {
    try {
        const allPedidos = await db.query(`SELECT * FROM bd_res.pedidos;`);

        console.log(allPedidos[1]);

        return res.status(200).json({ allPedidos });
    } catch (error) {
        return next(new AppError(`Ups! Error en la base de datos`, 500));
    }
};
export { getAllPedidos };
