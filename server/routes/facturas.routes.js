import express from 'express';
import {
    getFacturas,
    editFacturas,
    newFactura,
    getFactura,
    anularFactura
} from '../controllers/factura.controllers.js'

const facturasRoutes = express.Router();

facturasRoutes.route('/').get(getFacturas).post(newFactura).patch(editFacturas);
facturasRoutes.route('/numFactura').post(getFactura);
facturasRoutes.route('/anular').patch(anularFactura);
export default facturasRoutes;