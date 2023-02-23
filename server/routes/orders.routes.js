import express from 'express';

import {
    allReadyOrders,
    allPendingOrders,
    newOrder,
    getOrder,
    updateOrder,
    deleteOrder,
} from '../controllers/orders.controllers.js';

const orderRoutes = express.Router();

orderRoutes.route('/').get(allReadyOrders).post(newOrder);
orderRoutes.route('/Pending').get(allPendingOrders);
orderRoutes.route('/:id').get(getOrder).patch(updateOrder).delete(deleteOrder);

export default orderRoutes;
