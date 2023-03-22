import express from 'express';

import {
    getReportProducts,
    getReportWaiter,
    getAnuladas,
} from '../controllers/reports.controllers.js';

import { tokenVerification } from '../middlewares/jwt.verification.js';

const reportRoutes = express.Router();
reportRoutes.route('/factanuladas').post(getAnuladas);
reportRoutes.route('/product').post(getReportProducts);

reportRoutes.route('/waiter').post(getReportWaiter);

export default reportRoutes;
