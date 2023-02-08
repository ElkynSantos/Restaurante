import AppError from '../utilities/app.error.js';
import { productIdGenerator } from '../utilities/random.users.js';
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
            msg: 'Productos encontradosd en el menú',
            products,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const newProduct = async (req, res, next) => {
    try {
        const { productName, productPrice } = req.body;

        const emptyParams = Object.values({
            productName,
            productPrice,
        }).some((val) => !val);

        if (emptyParams) {
            return next(new AppError('Favor completar todos los campos', 400));
        }

        const productId = productIdGenerator(
            productName,
            new Date().getDate().toString()
        );

        const [newProduct] = await db.query(
            'CALL new_product(:productId, :productName, :productPrice)',
            {
                replacements: {
                    productId: productId,
                    productName: productName,
                    productPrice: productPrice,
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

const editarProducto = async (req, res, next) => {
    try {
        const { productCode, productDescription, producPrice } = req.body;

        var idGuia = await db.query(
            'SELECT id FROM bd_restaurante.productos WHERE codigo_producto = ? OR nombre_producto = ?',
            [productCode, productDescription]
        );

        const emptyParams = Object.values({
            productCode,
            productDescription,
            producPrice,
        }).some((val) => !val);

        if (emptyParams) {
            return next(new AppError('Favor completar todos los campos', 401));
        }

        const [editProduct] = await db.query(
            'UPDATE bd_restaurante.productos SET codigo_producto = ?, nombre_producto = ?, precio_producto = ? WHERE id = ?',
            [productCode, productDescription, producPrice, idGuia]
        );

        return res.status(200).json({
            status: 'Ok',
        });
    } catch (error) {
        console.log(error);
        return next(new AppError('Ha ocurrido algún error', 500));
    }
};

export { getProductbyCodeDesc, getAllProducts, newProduct, editarProducto };
