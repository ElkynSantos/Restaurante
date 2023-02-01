import express from "express";
import morgan from "morgan";

import userRouter from "./routes/users.routes.js";

// ? MIDDLEWARES
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// ? ROUTES

app.use("/api/v1/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
