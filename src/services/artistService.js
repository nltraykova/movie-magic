import artistRepository from "../repositories/artistRepository.js";

function getAll() {
    return artistRepository.getAll();
}

function create(artistData) {
    artistData.age = Number(artistData.age);

    return artistRepository.create(artistData);
}

const artistService = {
    getAll,
    create,
};

export default artistService;
