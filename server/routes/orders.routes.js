import express from 'express';

import {
    allOrders,
    newOrder,
    getOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/orders.controllers.js';

const orderRoutes = express.Router();

orderRoutes.route('/').get(allOrders).post(newOrder).patch(updateOrder);
orderRoutes.route('/:id').get(getOrder).delete(deleteOrder);

export default orderRoutes;
