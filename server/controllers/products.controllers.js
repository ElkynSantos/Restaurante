import AppError from '../utilities/app.error.js';
import db from '../db.js';

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await db.query('CALL get_all_products()');
        return res.status(200).json({
            status: 'Ok',
            msg: 'Lista de todos los productos del menú',
            allProducts,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getSingleProduct = async (req, res, next) => {
    try {
        const { productId } = req.body;
        const [product] = await db.query(
            'CALL get_single_product(:productID)',
            {
                replacements: {
                    productID: productId,
                },
            }
        );
        return res.status(200).json({
            status: 'Ok',
            msg: product.msg,
            product,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getProductbyCodeDesc = async (req, res, next) => {
    const { product } = req.body;
    try {
        const products = await db.query('CALL get_product(:productCodeDesc)', {
            replacements: {
                productCodeDesc: product,
            },
        });

        if (products[0].response === 0) {
            return next(
                new AppError(`El producto ${product} no exite en el menú`, 404)
            );
        }

        return res.status(200).json({
            status: 'Ok',
            msg: 'Productos encontrados en el menú',
            products,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const newProduct = async (req, res, next) => {
    try {
        const { productName, productPrice, productId, taxId } = req.body;

        const emptyParams = Object.values({
            productName,
            productPrice,
        }).some((val) => !val);

        if (emptyParams) {
            return next(new AppError('Favor completar todos los campos', 400));
        }

        const [newProduct] = await db.query(
            'CALL new_product(:productId, :productName, :productPrice, :taxId)',
            {
                replacements: {
                    productId: productId,
                    productName: productName,
                    productPrice: productPrice,
                    taxId: taxId,
                },
            }
        );

        return res.status(201).json({
            status: 'Ok',
            msg: newProduct.msg,
        });
    } catch (error) {
        return next(
            new AppError(
                'Ha ocurrido algún error al crear el nuevo producto',
                500
            )
        );
    }
};

const editProduct = async (req, res, next) => {
    try {
        const { productId, productCode, productName, productPrice } = req.body;

        console.log(productId, productCode, productName, productPrice);
        const updatedProduct = await db.query(
            'CALL edit_product(:productId, :productCode,  :productName,  :productPrice)',
            {
                replacements: {
                    productId: productId,
                    productCode: productCode,
                    productName: productName,
                    productPrice: productPrice,
                },
            }
        );

        if (updatedProduct[0].response === 0) {
            return res.status(400).json({
                status: 'fail',
                msg: updatedProduct[0].msg,
            });
        }

        return res.status(200).json({
            status: 'Ok',
            msg: updatedProduct[0].msg,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError('Ha ocurrido algún error', 500));
    }
};

const editProductStatus = async (req, res, next) => {
    try {
        const { productID, status } = req.body;

        if (!productID || !status) {
            return next(new AppError(`No se permiten campos vacios`, 400));
        }

        const [changeProductStatus] = await db.query(
            `CALL change_product_status(:productId, :newStatus)`,
            {
                replacements: {
                    productId: productID,
                    newStatus: status,
                },
            }
        );

        return res.status(200).json({
            status: 'Ok',
            msg: changeProductStatus.msg,
        });
    } catch (error) {
        return next(new AppError(`Error en la base de datos ${error}`, 500));
    }
};

export {
    getProductbyCodeDesc,
    getAllProducts,
    newProduct,
    editProduct,
    getSingleProduct,
    editProductStatus,
};
