import  express from 'express';

import {
    getTaxes,
} from '../controllers/orders.controllers.js';

const taxesRoutes = express.Router();

taxesRoutes.route('/').get(getTaxes);

export default taxesRoutes;