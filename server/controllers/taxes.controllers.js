import AppError from '../utilities/app.error.js';

import db from '../db.js';

const getTaxes = async (req, res, next) => {
    try {
        const allTaxes = await db.query('CALL get_all_taxes()');

        return res.status(200).json({
            status: 'Ok',
            allTaxes,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const addTax = async (req, res, next) => {
    try {
        const { taxDescription, taxAmount } = req.body;

        const [newTax] = await db.query(
            'CALL new_tax(:tax_name, :tax_amount)',
            {
                replacements: {
                    tax_name: taxDescription,
                    tax_amount: taxAmount,
                },
            }
        );

        if (newTax.response === 0) {
            return res.status(409).json({
                status: 'fail',
                msg: newTax.msg,
            });
        }

        return res.status(201).json({
            status: 'ok',
            msg: newTax.msg,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const editTax = async (req, res, next) => {
    try {
        const { taxId, taxName, taxAmount } = req.body;

        const [updatedTax] = await db.query(
            'CALL update_tax(:tax_id, :tax_name, :tax_amount)',
            {
                replacements: {
                    tax_id: taxId,
                    tax_name: taxName,
                    tax_amount: taxAmount,
                },
            }
        );

        if (updatedTax.response === 0) {
            return res.status(409).json({
                status: 'fail',
                msg: updatedTax.msg,
            });
        }

        return res.status(200).json({
            status: 'ok',
            msg: updatedTax.msg,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const deleteTax = async (req, res, next) => {
    try {
        const { taxId, taxStatus } = req.body;

        const [updatedTax] = await db.query(
            'CALL change_tax_status(:tax_id, :new_status)',
            {
                replacements: {
                    tax_id: taxId,
                    new_status: taxStatus,
                },
            }
        );

        return res.status(200).json({
            status: 'ok',
            msg: updatedTax.msg,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

export { getTaxes, addTax, editTax, deleteTax };
