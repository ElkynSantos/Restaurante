import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";

// ? MIDDLEWARES
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// ? ROUTES
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
