import movieRepository from '../repositories/movieRepository.js'

function getAll() {
    return movieRepository.getAll();
}

function getById(movieId) {
    return movieRepository.getById(movieId);
}

const movieService = {
    getAll,
    getById,
};

export default movieService;