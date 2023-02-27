import express from 'express';

import {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editProduct,
    getSingleProduct,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();

productsRoutes.route('/').get(getAllProducts).post(newProduct);
productsRoutes
    .route('/productCodeDesc')
    .post(getSingleProduct)
    .patch(editProduct);

export default productsRoutes;
