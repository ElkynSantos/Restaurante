import express from "express";

import { allUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/users.controllers.js";

const userRouter = express.Router();

userRouter.route("/").get(allUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default userRouter;
