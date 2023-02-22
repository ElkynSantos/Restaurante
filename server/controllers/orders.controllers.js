import db from '../db.js';

const allOrders = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

const newOrder = async (req, res) => {
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
        return res.status(500).json({
            status: 'fail',
            message: 'Unable to create new order',
        });
    }
};

const getOrder = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

const updateOrder = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

const deleteOrder = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented',
    });
};

export { allOrders, newOrder, getOrder, updateOrder, deleteOrder };
