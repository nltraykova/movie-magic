import { prisma } from '../lib/prisma.js';

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

async function create(movieData) {

    const result = await prisma.movie.create({
        data: movieData
    });

    return result;
}

async function edit(movieId, movieData, userId) {
    
    const result = await prisma.movie.update({
        data: movieData,
        where: {
            id: movieId,
            userId: userId
        }
    });

    return result;
}

async function remove(movieId, userId) {
    const result = await prisma.movie.delete({
        where: {
            id: movieId,
            userId: userId
        }
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
    edit,
    remove,
    attachArtist,
};

export default movieRepository;