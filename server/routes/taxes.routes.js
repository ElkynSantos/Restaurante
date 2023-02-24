import express from 'express';

import {
    getTaxes,
    addTax,
    editTax,
    deleteTax,
} from '../controllers/taxes.controllers.js';

const taxesRoutes = express.Router();

taxesRoutes
    .route('/')
    .get(getTaxes)
    .post(addTax)
    .patch(editTax)
    .delete(deleteTax);

export default taxesRoutes;
