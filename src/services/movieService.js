import movieRepository from '../repositories/movieRepository.js'

function getAll(filter = {}) {
    return movieRepository.getAll(filter);
}

function getById(movieId) {
    const id = Number(movieId);
    
    return movieRepository.getById(id);
}

function create(movieData, userId) {
    movieData.rating = Number(movieData.rating);
    movieData.year = Number(movieData.year);
    movieData.userId = userId;
    
    return movieRepository.create(movieData);
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