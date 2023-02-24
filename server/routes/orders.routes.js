import express from 'express';

import {
    allReadyOrders,
    allPendingOrders,
    newOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    CompletedOrder,
    BackCompleteOrder,
} from '../controllers/orders.controllers.js';

const orderRoutes = express.Router();

orderRoutes.route('/').get(allReadyOrders).post(newOrder);
orderRoutes.route('/Pending').get(allPendingOrders);
orderRoutes.route('/Listo').post(CompletedOrder);
orderRoutes
    .route('/:id')
    .get(getOrder)
    .patch(updateOrder)
    .delete(deleteOrder)
    .post(BackCompleteOrder);

export default orderRoutes;
