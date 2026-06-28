import movieRepository from '../repositories/movieRepository.js'

function getAll() {
    return movieRepository.getAll();
}

function getById(movieId) {
    return movieRepository.getById(movieId);
}

function create(movie) {
    movieRepository.create(movie);
}

const movieService = {
    getAll,
    getById,
    create,
};

export default movieService;