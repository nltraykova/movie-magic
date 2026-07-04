import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js';

async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany();

    if (filter.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    };

    if (filter.year) {
        movies = movies.filter(movie => movie.year === filter.year);
    };

    if (filter.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    };
    
    return movies;
}

async function getById(movieId) {
    const movie = await prisma.movie.findUniqueOrThrow({
        where: {
            id: movieId
        }
    });

    return movie;
}

async function create(movie) {

    const result = await prisma.movie.create({
        data: movie
    });

    return result;
}

const movieRepository = {
    getAll,
    getById,
    create,
};

export default movieRepository;