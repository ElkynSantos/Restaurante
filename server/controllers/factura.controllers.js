import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

import db from '../db.js';

const getFacturas = async (req, res, next) => {
    try {
        const allFacturas = await db.query('CALL get_bills()');
        return res.status(200).json({
            status: 'Ok',
            msg: 'Lista de todos las facturas',
            allFacturas,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};
const getFactura = async (req, res) => {
    const { Numero_factura } = req.body;
    console.log('11111111' + Numero_factura);
    const [factura] = await db.query('CALL get_bill(:p_numeroFactura)', {
        replacements: {
            p_numeroFactura: Numero_factura,
        },
    });
    console.log('aaaaaaaaaa' + Numero_factura);
    if (factura.response === 0) {
        return res.status(404).json({
            status: 'fail',
            msg: user.msg,
        });
    }

    return res.status(200).json({
        status: 'Ok',
        factura,
    });
};

const editFacturas = async (req, res, next) => {
    try {
        const { id, RTN_cliente, Nombre_cliente } = req.body;

        console.log(id, RTN_cliente, Nombre_cliente);
        const updatedFactura = await db.query(
            'CALL edit_bills(:p_id,:p_rtn_cliente, :p_nombre_cliente)',
            {
                replacements: {
                    p_id: id,
                    p_rtn_cliente: RTN_cliente,
                    p_nombre_cliente: Nombre_cliente,
                },
            }
        );

        if (updatedFactura[0].response === 0) {
            return res.status(400).json({
                status: 'fail',
                msg: updatedFactura[0].msg,
            });
        }

        return res.status(200).json({
            status: 'Ok',
            msg: updatedFactura[0].msg,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError('Ha ocurrido algún error', 500));
    }
};

const newFactura = async (req, res, next) => {
    try {
        const {
            numeroFactura,
            nombreCliente,
            RtnCliente,
            fechaCreacion,
            subtotal,
            total,
            tarjetaEfectivo,
            cambio,
            anular,
            pendiente,
            pagado,
            idConfiguracionFactura,
            idOrden,
            usuarioAtiende,
        } = req.body;

        console.log(
            numeroFactura,
            nombreCliente,
            RtnCliente,
            fechaCreacion,
            subtotal,
            total,
            tarjetaEfectivo,
            cambio,
            anular,
            pendiente,
            pagado,
            idConfiguracionFactura,
            idOrden,
            usuarioAtiende
        );

        const emptyParams = Object.values({
            numeroFactura,
            nombreCliente,
            RtnCliente,
            fechaCreacion,
            subtotal,
            total,
            tarjetaEfectivo,
            cambio,
            anular,
            pendiente,
            pagado,
            idConfiguracionFactura,
            idOrden,
            usuarioAtiende,
        }).some((val) => !val);

        if (emptyParams) {
            return next(new AppError('Favor completar todos los campos', 400));
        }

        const [newFactura] = await db.query(
            'CALL new_bill(:p_numero_factura,:p_nombre_cliente,:p_rtn_cliente,:p_fecha_creacion,:p_subtotal,:p_total,:p_tarjeta_efectivo,:p_cambio, :p_anular, :p_pendiente,:p_pagado,:p_id_configuracion_factura,:p_id_orden,:p_usuario_atiende)',
            {
                replacements: {
                    p_numero_factura: numeroFactura,
                    p_nombre_cliente: nombreCliente,
                    p_rtn_cliente: RtnCliente,
                    p_fecha_creacion: fechaCreacion,
                    p_subtotal: subtotal,
                    p_total: total,
                    p_tarjeta_efectivo: tarjetaEfectivo,
                    p_cambio: cambio,
                    p_anular: anular,
                    p_pendiente: pendiente,
                    p_pagado: pagado,
                    p_id_configuracion_factura: idConfiguracionFactura,
                    p_id_orden: idOrden,
                    p_usuario_atiende: usuarioAtiende,
                },
            }
        );

        return res.status(201).json({
            status: 'Ok',
            msg: newFactura.msg,
        });
    } catch (error) {
        console.log(error);
        return next(
            new AppError(
                'Ha ocurrido algún error al crear la nueva factura',
                500
            )
        );
    }
};

export { getFacturas, editFacturas, newFactura, getFactura };
