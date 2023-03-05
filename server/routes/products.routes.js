import express from 'express';

import {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editProduct,
    getSingleProduct,
    editProductStatus,
    getAllActive_products,
} from '../controllers/products.controllers.js';

const productsRoutes = express.Router();
productsRoutes.route('/activeproducts').get(getAllActive_products);
productsRoutes.route('/').get(getAllProducts).post(newProduct);
productsRoutes
    .route('/productCodeDesc')
    .post(getProductbyCodeDesc)
    .patch(editProduct)
    .delete(editProductStatus);

export default productsRoutes;
