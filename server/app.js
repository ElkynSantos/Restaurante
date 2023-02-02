import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";

dotenv.config();

// ? MIDDLEWARES
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// ? ROUTES
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

const {PORT} = process.env;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
