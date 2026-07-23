import * as z from 'zod';
import bcrypt from 'bcrypt';

import userRepository from '../repositories/userRepository';

export const createUserSchema = z.object({
    email: z.string()
        .email({ error: 'Invalid email address' })
        .min(10, { error: 'Email must be at least 10 characters long' })
        .trim()
        .refine(async (value) => {
           const userExists = await userRepository.findByEmail(value);

           return !userExists
        }, { error: 'Email already exists' }),
    password: z.string()
        .min(6, { error: 'Password must be at least 6 characters long' })
        .regex(/^[a-zA-Z0-9]+$/, { error: 'Password must contain at least one letter and one number' }),
    repeatPassword: z.string()
}).refine((data) => data.password === data.repeatPassword, {
    error: 'Passwords do not match',
    path: ['repeatPassword']
}).transform(async ({repeatPassword, ...data}) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return {
        ...data,
        password: hashedPassword
    };
});
