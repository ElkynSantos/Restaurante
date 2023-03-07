import express from 'express';
import {
    getFacturas,
    editFacturas,
    newFactura 
} from '../controllers/factura.controllers.js'

const facturasRoutes = express.Router();

facturasRoutes.route('/').get(getFacturas).post(newFactura);

export default facturasRoutes;