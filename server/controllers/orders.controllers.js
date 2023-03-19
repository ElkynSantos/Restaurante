import db from '../db.js';
import AppError from '../utilities/app.error.js';
import { comparePassword } from '../utilities/handle.bcrypt.js';

const allCompletedOrders = async (req, res, next) => {
    try {
        const [order] = await db.query('call get_readytoFactOrders;');

        /*
  'CALL get_all_orders(:estadoCocina, :estadoFactura)',
            {
                replacements: {
                    estadoCocina: 1,
                    estadoFactura: 1,
                },
            }
        */
        if (order.orders === null) {
            return next(
                new AppError(`No hay ordenes completadas en este momento`, 404)
            );
        }

        return res.json({
            order,
        });
    } catch (error) {
        return next(
            new AppError(
                `No se pueden mostrar las ordenes en este momento`,
                500
            )
        );
    }
};

const allPendingOrders = async (req, res, next) => {
    try {
        const [order] = await db.query('call get_cookingOrders;');

        /*
'call db_rest.get_all_orders(0, 0);', {
            replacements: {
                estadoCocina: 0,
                estadoFactura: 0,
            },
        }
*/

        console.log(order);
        if (order.orders === null) {
            return next(
                new AppError(`No hay ordenes activas en este momento`, 404)
            );
        }

        return res.json({
            order,
        });
    } catch (error) {
        return next(
            new AppError(
                `No se pueden mostrar las ordenes en este momento`,
                500
            )
        );
    }
};

const allCookedOrders = async (req, res, next) => {
    try {
        const [order] = await db.query('call get_readyOrders;');
        /*
  'CALL get_all_orders(:estadoCocina, :estadoFactura)',
            {
                replacements: {
                    estadoCocina: 1,
                    estadoFactura: 0,
                },
            }
        */

        if (order.orders === null) {
            return next(
                new AppError(`No hay ordenes activas en este momento`, 404)
            );
        }

        return res.json({
            order,
        });
    } catch (error) {
        return next(
            new AppError(
                `No se pueden mostrar las ordenes en este momento`,
                500
            )
        );
    }
};
const CompletedOrder = async (req, res, next) => {
    const { id } = req.body;
    try {
        await db.query('call setOrderReady(:idParam);', {
            replacements: {
                idParam: id,
            },
        });

        return res.json({});
    } catch (error) {
        return next(
            new AppError(
                `No se pueden mostrar las ordenes en este momento`,
                500
            )
        );
    }
};

const BackCompleteOrder = async (req, res, next) => {
    const { id } = req.body;
    try {
        await db.query('call backOrderReady(:idParam);', {
            replacements: {
                idParam: id,
            },
        });

        return res.json({});
    } catch (error) {
        return next(
            new AppError(
                `No se pueden mostrar las ordenes en este momento`,
                500
            )
        );
    }
};

const newOrder = async (req, res, next) => {
    try {
        const { tableId, waiterId, products, delivery } = req.body;

        // Llamar al procedimiento almacenado `crear_pedido` utilizando `sequelize.query()`
        const [newOrder] = await db.query(
            'CALL new_order(:p_numeroMesa, :p_idMesero, :p_productos, :p_delivery)',
            {
                replacements: {
                    p_numeroMesa: tableId,
                    p_idMesero: waiterId,
                    p_productos: JSON.stringify(products),
                    p_delivery: delivery,
                },
            }
        );
        return res.status(201).json({
            status: 'ok',
            msg: newOrder.msg,
        });
    } catch (error) {
        return next(new AppError(`No se pudo crear el nuevo pedido`, 500));
    }
};

const getAllOrdersfromListOrders = async (req, res) => {
    try {
        const { billid } = req.body;
        console.log('getAllOrdersfromListOrders');
        console.log(billid);
        // Llamar al procedimiento almacenado `crear_pedido` utilizando `sequelize.query()`
        const [newOrder] = await db.query(
            'call db_rest.sp_getOrden(:p_billid);',
            {
                replacements: {
                    p_billid: billid,
                },
            }
        );

        console.log('NEWORDER');

        console.log(newOrder);
        return res.status(200).json({
            newOrder,
        });
    } catch (error) {
        return next(
            new AppError(`No se pudo obtener la informacion de la factura`, 500)
        );
    }
};

const updateOrder = async (req, res, next) => {
    try {
        const { orderId, products, userId, userPassword } = req.body;

        const [manager] = await db.query('CALL auth_admin(:userID)', {
            replacements: {
                userID: userId,
            },
        });

        if (manager.status !== 1) {
            return res.status(401).json({
                status: 'fail',
                msg: 'Usuario inactivo',
            });
        }

        const rightPassword = await comparePassword(
            userPassword,
            manager.password
        );

        if (!rightPassword) {
            return res.status(401).json({
                status: 'fail',
                msg: 'Contraseña invalida',
            });
        }

        if (manager.rol !== 'Gerente') {
            return res.status(401).json({
                status: 'fail',
                msg: 'Usuario no cuenta con los privilegios para editar pedidos',
            });
        }

        const [updatedOrder] = await db.query(
            'CALL edit_order_products(:order_id, :products_list)',
            {
                replacements: {
                    order_id: orderId,
                    products_list: JSON.stringify(products),
                },
            }
        );

        return res.status(200).json({
            status: 'ok',
            msg: updatedOrder.msg,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError('No se ha podido editar la orden', 500));
    }
};

const deleteOrder = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

export {
    allCompletedOrders,
    allPendingOrders,
    newOrder,
    updateOrder,
    deleteOrder,
    CompletedOrder,
    BackCompleteOrder,
    allCookedOrders,
    getAllOrdersfromListOrders,
};
