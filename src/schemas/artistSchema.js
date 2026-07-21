import * as z from 'zod';

export const createArtistSchema = z.object({
    name: z.string()
        .min(5, { error: 'Name must be at least 5 characters long'})
        .regex(/^[A-Za-z ]+$/, { error: 'Name can only contain letters and spaces'}),
    age: z.coerce.number()
        .min(1, { error: 'Age must be at least 1' })
        .max(120, { error: 'Age must be at most 120'}),
    born: z.string()
        .min(10, { error: 'Born must be at least 10 characters long' })
        .regex(/^[A-Za-z0-9 ]+$/, { message: "Born can only contain letters, numbers, and spaces" }),
    imageURL: z.string()
        .regex(/^https?\/\//, { error: 'Image URL must start with http:// or https://' })
});