import AppError from '../utilities/app.error.js';

import db from '../db.js';

const getAnuladas = async (req, res, next) => {
    try {
        let { InitialDate, FinalDate } = req.body;

        const permissions = await db.query(
            `CALL obtenerFacturasAnuladasPorRangoDeFecha(:p_InitialDate, :p_FinalDate)`,
            {
                replacements: {
                    p_InitialDate: InitialDate,
                    p_FinalDate: FinalDate,
                },
            }
        );

        return res.status(200).json(permissions);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getReportWaiter = async (req, res, next) => {
    try {
        let { InitialDate, FinalDate } = req.body;

        const permissions = await db.query(
            `CALL reporte_ganancias_por_mesero_fecha(:p_InitialDate, :p_FinalDate)`,
            {
                replacements: {
                    p_InitialDate: InitialDate,
                    p_FinalDate: FinalDate,
                },
            }
        );

        return res.status(200).json(permissions);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getReportProducts = async (req, res, next) => {
    try {
        let { InitialDate, FinalDate } = req.body;
        console.log('AÑEÑE');
        const permissions = await db.query(
            `CALL reporte_ganancias_por_producto_fecha(:p_InitialDate, :p_FinalDate)`,
            {
                replacements: {
                    p_InitialDate: InitialDate,
                    p_FinalDate: FinalDate,
                },
            }
        );

        return res.status(200).json(permissions);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

export { getReportProducts, getReportWaiter, getAnuladas };
