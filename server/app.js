// import express from "express";
// import dotenv from "dotenv";

// const app = express();
// dotenv.config();

// // app.get("/api/v1/auth");
// // app.use(express.json());
// app.listen(process.env.PORT, () => {
//    console.log(`Server está corriendo ${process.env.PORT}`);
// });

import express from 'express';
import morgan from 'morgan';

// ? MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// ? SERVE PUBLIC FILES
// app.use(express.static(`${__dirname}/public`));

// ? ROUTES
app.use('/api/v1/users', userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});