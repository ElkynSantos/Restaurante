import express from 'express';
import {
    getFacturas,
    editFacturas,
    newFactura,
    getFactura
} from '../controllers/factura.controllers.js'

const facturasRoutes = express.Router();

facturasRoutes.route('/').get(getFacturas).post(newFactura).put(editFacturas);
facturasRoutes.route('/numFactura').post(getFactura);
export default facturasRoutes;