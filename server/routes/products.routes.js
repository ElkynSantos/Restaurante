import express from 'express';

import {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editarProducto,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();

productsRoutes.route('/').get(getAllProducts).post(newProduct);
productsRoutes.route('/:id').get(getProductbyCodeDesc).patch(editarProducto);

export default productsRoutes;
