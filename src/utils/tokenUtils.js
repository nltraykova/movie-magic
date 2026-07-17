import jwt from 'jsonwebtoken';

export function generateAuthToken(user) {
    const playload = { id: user.id, email: user.email };
    const secret = process.env.AUTH_SECRET;
    
    const token = jwt.sign(playload, secret, { expiresIn: '1h'});

    return token;
}