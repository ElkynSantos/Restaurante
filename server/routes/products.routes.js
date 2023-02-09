import express from 'express';

import {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editProduct,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();

productsRoutes.route('/').get(getAllProducts).post(newProduct);
productsRoutes.route('/:id').get(getProductbyCodeDesc).patch(editProduct);

export default productsRoutes;