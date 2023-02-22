import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import orderRoutes from './routes/orders.routes.js';
<<<<<<< HEAD
import pedidosRoutes from './routes/pedidos.routes.js';
import productosRoutes from './routes/products.routes.js';
=======
import productsRoutes from './routes/products.routes.js';
>>>>>>> origin/users
import AppError from './utilities/app.error.js';
import cors from 'cors';
import db from './db.js';

// ! ERROR HANDLER

dotenv.config();

// ? DATABASE

try {
    await db.authenticate();
    console.log('Conexión Correcta a la DB');
} catch (error) {
    console.log(`Error en la conexión: ${error}`);
}

// ? MIDDLEWARES
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// ? ROUTES
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/orders', orderRoutes);
<<<<<<< HEAD
app.use('/pedidos', pedidosRoutes);
app.use('/products', productosRoutes);
=======
app.use('/products', productsRoutes);
>>>>>>> origin/users

app.all('*', (req, res, next) => {
    next(new AppError(`La ruta ${req.originalUrl} no existe`, 404));
});

// ? ERROR MIDDLEWARE

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
