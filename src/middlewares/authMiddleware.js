import jwt from 'jsonwebtoken';
import { log } from 'node:console';

export function authMiddleware(req, res, next) {
    const token = req.cookies.auth;

    if(!token) {
       return next();
    };

    try {
        const decodedToken = jwt.verify(token, 'SECRET123');

        req.user = decodedToken;
        res.locals.user = decodedToken;
    } catch (error) {
        res.clearCookie('auth');

        return res.redirect('/auth/login');
    };

    next();
}