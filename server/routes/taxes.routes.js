import  express from 'express';

import {
    getTaxes,
    addTax,
} from '../controllers/orders.controllers.js';

const taxesRoutes = express.Router();

taxesRoutes.route('/').get(getTaxes).post(addTax);

export default taxesRoutes;