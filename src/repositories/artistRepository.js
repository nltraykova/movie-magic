import { prisma } from "../lib/prisma.js";
import artistController from "../controllers/artistController.js";

async function getAll(filter = {}) {
    const artists = await prisma.artist.findMany({
        where: {
            id: {
                notIn: Array.isArray(filter.exclude) 
                    ? filter.exclude 
                    : []
            }
        }
    });

    return artists;
}

async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    });

    return artist;
}

const artistRepository = {
    getAll,
    create,
};

export default artistRepository;
