import express from 'express';

import {
    login,
    resetPassword,
    sendResetPassEmail,
    logout,
} from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.route('/login').post(login);
authRouter.route('/reset-password/:token').patch(resetPassword);
authRouter.route('/reset-password/').post(sendResetPassEmail);
authRouter.route('/logout').post(logout);

export default authRouter;
