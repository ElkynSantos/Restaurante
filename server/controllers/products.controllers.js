import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

import db from '../db.js';
import { encrypt } from '../utilities/random.users.js';

import { userIdGenerator } from '../utilities/random.users.js';

//Por separado por si en una sola función tira algún error
/*const getProductoCodigo = async (req, res, next) => {
    try 
    {
        const {productCode} = req.body;
        const product = await db.query('SELECT * FROM bd_restaurante.productos WHERE codigo_producto = ?', [productCode]);

        console.log(product);

        return res.status(200).json({
            status: 'Ok',
            product,
        });
    } catch (error)
    {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

const getProductoDescripcion = async (req, res, next) => {
    try 
    {
        const {productDesc} = req.body;
        const product = await db.query('SELECT * FROM bd_restaurante.productos WHERE nombre_producto = ?', [productDesc]);

        console.log(product);

        return res.status(200).json({
            status: 'Ok',
            product,
        });
    } catch (error)
    {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}*/

const getProductoCodigoORDescripcion = async (req, res, next) => {
    try 
    {
        const {productCode, productDesc} = req.body;
        const product = await db.query('SELECT * FROM bd_restaurante.productos WHERE codigo_producto = ? OR nombre_producto = ?', [productCode, productDesc]);

        console.log(product);

        return res.status(200).json({
            status: 'Ok',
            product,
        });
    } catch (error)
    {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

const getProductos = async (req, res,next) => {
    try 
    {
        const allProducts = await db.query('SELECT * FROM bd_restaurante.productos;');

        console.log(allProducts);

        return res.status(200).json({
            status: 'Ok',
            allProducts,
        });
    } catch (error)
    {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

const crearProducto = async (req, res, next) => {
    try {
        const{
            productCode,
            productDescription,
            producPrice,
        } = req.body;

        const emptyParams = Object.values({
            productCode,
            productDescription,
            producPrice,
        }).some((val) => !val);

        if (emptyParams){
            return next(new AppError('Favor completar todos los campos', 401));
        }
        const [newProduct] = await db.query('INSERT INTO db_restaurante.productos (codigo_producto, nombre_producto, precio_producto) VALUES ?, ?, ?', [productCode, productDescription, producPrice]);

        return res.status(200).json({
            status: 'Ok',
        });
    } catch (error){
        console.log(error);
        return next(new AppError('Ha ocurrido algún error', 500));
    }
};
 
export { getProductoCodigoORDescripcion, getProductos, crearProducto };