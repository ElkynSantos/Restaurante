import db from '../db.js';
import AppError from '../utilities/app.error.js';
import { comparePassword } from '../utilities/handle.bcrypt.js';

const allReadyOrders = async (req, res, next) => {
    try {
        const [order] = await db.query('call salvador3();');

        if (order.orders === null) {
            res.status(200).json({
                status: 'fail',
                message: 'No hay pedidos activos por el momento',
            });
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
        const [order] = await db.query('CALL get_active_orders();');

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
        await db.query(
            'UPDATE db_rest.pedidos SET estadoCocina = 1 WHERE id = ' + id + ';'
        );

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
        await db.query(
            'UPDATE db_rest.pedidos SET estadoCocina = 0 WHERE id = ' + id + ';'
        );

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

const getOrder = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

const updateOrder = async (req, res, next) => {
    try {
        const { orderId, products, userId, userPassword } = req.body;

        const [manager] = await db.query('CALL auth_admin(:userID)', {
            replacements: {
                userID: userId,
            },
        });

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
    allReadyOrders,
    allPendingOrders,
    newOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    CompletedOrder,
    BackCompleteOrder,
};
