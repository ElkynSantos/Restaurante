import AppError from '../utilities/app.error.js';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

const tokenVerification = async (req, res, next) => {
    // ? Check if the token exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('Not logged in', 401));
    }

    // ? Validate if the token is valid

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded);
    // ? Check if the user still exists in the database
};

export { tokenVerification };
