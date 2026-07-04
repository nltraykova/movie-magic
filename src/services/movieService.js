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

function attachArtist(movieId, artistId) {
    const movieIdNumber = Number(movieId);
    const artistIdNumber = Number(artistId);

    return movieRepository.attachArtist(movieIdNumber, artistIdNumber);
};

const movieService = {
    getAll,
    getById,
    create,
    attachArtist,
};

export default movieService;