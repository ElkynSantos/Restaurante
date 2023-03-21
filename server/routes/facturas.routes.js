import express from 'express';
import {
    getFacturas,
    editFacturas,
    newFactura,
    getFactura,
    getBillData,
    payBill
} from '../controllers/factura.controllers.js';

const facturasRoutes = express.Router();

facturasRoutes.route('/').get(getFacturas).post(newFactura).patch(editFacturas);

facturasRoutes.route('/getBillData').post(getBillData);
facturasRoutes.route('/numFactura').post(getFactura);

facturasRoutes.route('/payBill').post(payBill);

export default facturasRoutes;
