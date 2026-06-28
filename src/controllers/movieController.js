import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getById(movieId);

    res.render('details', { movie });
});

export default movieController;