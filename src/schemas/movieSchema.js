import { error } from 'node:console';
import * as z from 'zod';

export const createMovieSchema = z.object({
    title: z.string()
        .min(5, { error: 'Title must be at least 5 characters long'})
        .regex(/^[a-ZA-z0-9 ]+$/),
    category: z.enum(
        ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
        { error: 'Invalid movie category' }
    ),
    genre: z.string()
        .min(5, { error: 'Genre must be at least 5 characters long'})
        .regex(/^[a-zA-Z0-9 ]+$/),
    director: z.string()
        .min(5, { error: 'Director must be at least 5 characters long' })
        .regex(/^[a-zA-Z0-9 ]+$/),
    year: z.coerce.number()
        .min(1900, { error: 'Year must be greater than or equal to 1900' })
        .max(new Date().getFullYear(), { error: `Year must be less than or equal to ${new Date().getFullYear()}`}),
    imageUrl: z.string()
        .regex(/^https?:\/\//, { error: 'Image URL must start with http:// or https://' }),
    rating: z.coerce.number()
        .min(1, { error: 'Rating must be at least 0' })
        .max(10, { error: 'Rating must be at most 10' }),
    description: z.string()
        .min(200, { error: 'Description must be at least 20 characters long' })
        .regex(/^[a-zA-Z0-9 ]+$/),
})