import fs from 'fs/promises';

async function readDB(collection) {
    const db = await fs.readFile('./src/db.json', 'utf-8');

    const dbData = JSON.parse(db);

    if (collection && !dbData.hasOwnProperty(collection)) {
        return new Error('No such collection');
    };

    return collection ? dbData[collection] : dbData;
}

async function getAll() {
    const movies = await readDB('movies');
    
    return movies;
}

async function getById(movieId) {
    const movies = await readDB('movies');

    const movie = movies.find(movie => movie.id === movieId);

    return movie;
}

const movieRepository = {
    getAll,
    getById
}

export default movieRepository;