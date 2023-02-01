import express from "express";

import { login, resetPassword, logout } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/resetPassword").post(resetPassword);
authRouter.route("/logout").post(logout);

export default authRouter;