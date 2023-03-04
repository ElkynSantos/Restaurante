import express from 'express';

import {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editProduct,
    getSingleProduct,
    editProductStatus,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();

productsRoutes.route('/').get(getAllProducts).post(newProduct);
productsRoutes
    .route('/productCodeDesc')
    .post(getProductbyCodeDesc)
    .patch(editProduct)
    .delete(editProductStatus);

export default productsRoutes;
