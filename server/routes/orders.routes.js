import express from 'express';

import {
    allPendingOrders,
    newOrder,
    updateOrder,
    deleteOrder,
    CompletedOrder,
    BackCompleteOrder,
    allCookedOrders,
    allCompletedOrders,
    getAllOrdersfromListOrders,
} from '../controllers/orders.controllers.js';

const orderRoutes = express.Router();

orderRoutes.route('/').get(allCompletedOrders).post(newOrder);
orderRoutes.route('/pending').get(allPendingOrders);
orderRoutes.route('/ready').post(CompletedOrder).get(allCookedOrders);
orderRoutes.route('/listorders').post(getAllOrdersfromListOrders);
orderRoutes
    .route('/:id')

    .patch(updateOrder)
    .delete(deleteOrder)
    .post(BackCompleteOrder);

export default orderRoutes;
