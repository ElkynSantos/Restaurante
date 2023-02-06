import express from 'express';

import { getAllProductos } from '../controllers/products.controller.js';

const productosRoutes = express.Router();

productosRoutes.route('/').get(getAllProductos);

export default productosRoutes;
