import { Router } from "express";
import movieService from "../services/movieService.js";
import artistService from "../services/artistService.js";

const movieController = Router();

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);

    res.render('movies/search', { movies, filter, pageTitle: 'Search' });
});

movieController.get('/create', (req, res) => {

    res.render('movies/create', { pageTitle: 'Create Movie'});

});

movieController.post('/create', async (req, res) => {
    const newMovie = req.body;

    await movieService.create(newMovie);

    res.redirect('/');
});

movieController.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getById(movieId);

    const ratingStars = '&#x2605;'.repeat(Math.floor(movie.rating));

    res.render('movies/details', { movie, ratingStars, pageTitle: 'Movie Details' });
});

movieController.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    
    const movie = await movieService.getById(movieId);

    const artists = await artistService.getAll();

    res.render('movies/attach', { movie, artists })
});

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;

    const artistId = req.body.artist;

    await movieService.attachArtist(movieId, artistId);

    res.redirect(`/movies/${movieId}`);
});

export default movieController;