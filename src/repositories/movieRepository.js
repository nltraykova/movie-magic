import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

async function readDb(collection) {
    const db = await fs.readFile('./src/db.json', 'utf-8');

    const dbData = JSON.parse(db);

    if (collection && !dbData.hasOwnProperty(collection)) {
        throw new Error('No such collection');
    };

    return collection ? dbData[collection] : dbData;
}

async function writeDb(db) {
    const dataDb = JSON.stringify(db, null, 2);

    await fs.writeFile('./src/db.json', dataDb, { encoding: 'utf-8' });
}

async function getAll() {
    const movies = await readDb('movies');
    
    return movies;
}

async function getById(movieId) {
    const movies = await readDb('movies');

    const movie = movies.find(movie => movie.id === movieId);

    if (!movie) {
        throw new Error('No movie found!');
    }

    return movie;
}

async function create(movie) {
    movie.id = uuid();

    const db = await readDb();

    db.movies.push(movie);

    await writeDb(db);
}

const movieRepository = {
    getAll,
    getById,
    create,
};

export default movieRepository;