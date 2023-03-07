import express from 'express';
import {
    getConfigFacturas,
    editConfigFacturas,
    newConfigFactura 
} from '../controllers/configFacturas.controllers.js'

const facturasRoutes = express.Router();

facturasRoutes.route('/').get(getConfigFacturas).post(newConfigFactura);

export default facturasRoutes;