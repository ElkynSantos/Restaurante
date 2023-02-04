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

userRouter.route('/').get(tokenVerification, allUsers).post(createUser);
userRouter.route('/status').patch(editUserStaus);
userRouter.route('/new-password').patch(updatePassword);
userRouter.route('/:id').get(getUser).patch(updateUser);

export default userRouter;
