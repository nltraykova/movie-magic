import movieRepository from '../repositories/movieRepository.js'

function getAll(filter = {}) {
    return movieRepository.getAll(filter);
}

function getById(movieId) {
    const id = Number(movieId);
    
    return movieRepository.getById(id);
}

function create(movie) {
    movie.rating = Number(movie.rating);
    movie.year = Number(movie.year);
    
    return movieRepository.create(movie);
}

const movieService = {
    getAll,
    getById,
    create,
};

export default movieService;