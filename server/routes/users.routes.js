import express from 'express';

import {
    allUsers,
    createUser,
    getUser,
    updateUser,
    editUserStaus,
    updatePassword,
} from '../controllers/users.controllers.js';

import { tokenVerification } from '../middlewares/jwt.verification.js';

const userRouter = express.Router();

// userRouter.route('/').get(tokenVerification, allUsers).post(createUser);
userRouter.route('/').get(allUsers).post(createUser); //Sin token
userRouter.route('/status').patch(editUserStaus);
userRouter.route('/new-password').patch(updatePassword);
userRouter.route('/user').get(getUser).patch(updateUser);

export default userRouter;
