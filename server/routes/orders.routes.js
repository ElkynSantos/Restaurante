import express from 'express';

import {
    allPendingOrders,
    newOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    CompletedOrder,
    BackCompleteOrder,
    allCookedOrders,
    allCompletedOrders,
} from '../controllers/orders.controllers.js';

const orderRoutes = express.Router();

orderRoutes.route('/').get(allCompletedOrders).post(newOrder);
orderRoutes.route('/pending').get(allPendingOrders);
orderRoutes.route('/ready').post(CompletedOrder).get(allCookedOrders);
orderRoutes
    .route('/:id')
    .get(getOrder)
    .patch(updateOrder)
    .delete(deleteOrder)
    .post(BackCompleteOrder);

export default orderRoutes;
