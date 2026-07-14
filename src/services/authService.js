import userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';

async function register(userData) {
    const hashPassword = await bcrypt.hash(userData.password, 10);

    return await userRepository.create({
        ...userData,
        password: hashPassword
    });
}

const authService = {
    register
};

export default authService;