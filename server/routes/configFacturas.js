import express from 'express';
import {
    getConfigFacturas,
    editConfigFacturas,
    newConfigFactura 
} from '../controllers/configFacturas.controllers.js'

const configRoutes = express.Router();

configRoutes.route('/').get(getConfigFacturas).post(newConfigFactura).patch(editConfigFacturas);

export default configRoutes;