import express from 'express';

import {
    getProductoCodigoORDescripcion,
    getProductos,
    crearProducto,
    editarProducto,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();

productsRoutes.route('/').get(getProductos).post(crearProducto);
productsRoutes.route('/:id').get(getProductoCodigoORDescripcion).patch(editarProducto);

export default productsRoutes;