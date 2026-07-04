import { prisma } from "../lib/prisma.js";
import artistController from "../controllers/artistController.js";

async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    });

    return artist;
}

const artistRepository = {
    create,
};

export default artistRepository;
