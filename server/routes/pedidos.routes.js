import express from 'express';

import { getAllPedidos } from '../controllers/pedidos.controllers.js';

const pedidosRoutes = express.Router();

pedidosRoutes.route('/').get(getAllPedidos);

export default pedidosRoutes;
