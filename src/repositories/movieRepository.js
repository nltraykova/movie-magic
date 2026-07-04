import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js';
import { connected } from 'process';

async function getAll(filter = {}) {
    const movies = await prisma.movie.findMany({
        where: {
            title: {
                contains: filter.search,
                mode: 'insensitive'
            },
            year: Number(filter.year) || undefined,
            genre: {
                equals: filter.genre || undefined,
                mode: 'insensitive'
            }
        }
    });
    
    return movies;
}

async function getById(movieId) {
    const movie = await prisma.movie.findUnique({
        where: {
            id: movieId
        },
        include: {
            artists: true
        }
    });

    if (!movie) {
        throw new Error('No movie found');
    }

    return movie;
}

async function create(movie) {

    const result = await prisma.movie.create({
        data: movie
    });

    return result;
}

async function attachArtist(movieId, artistId) {
    const result = await prisma.movie.update({
        where: { id: movieId },
        data: {
            artists: {
                connect: { id: artistId }
            }
        }
    });

    return result;
}

const movieRepository = {
    getAll,
    getById,
    create,
    attachArtist,
};

export default movieRepository;