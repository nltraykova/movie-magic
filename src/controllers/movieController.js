import { Router } from "express";
import * as z from "zod";

import movieService from "../services/movieService.js";
import artistService from "../services/artistService.js";
import { isAuth } from '../middlewares/authMiddleware.js';
import { createMovieSchema } from "../schemas/movieSchema.js";
import { title } from "node:process";

const movieController = Router();

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);

    res.render('movies/search', { movies, filter, pageTitle: 'Search' });
});

movieController.get('/create', isAuth, (req, res) => {
    const categoryOptions = prepareCategoryViewData();

    res.render('movies/create', { categoryOptions, pageTitle: 'Create Movie'});

});

movieController.post('/create', isAuth, async (req, res) => {
    const userId = req.user.id;
    const newMovie = req.body;
    
    try {
        const movieData = createMovieSchema.parse(newMovie);

        await movieService.create(movieData, userId);

        res.redirect('/'); 
    } catch (error) {
        let errors = {};
        let errorMessage = null;

        const categoryOptions = prepareCategoryViewData(newMovie);

        if (error.name === 'ZodError') {
            errors = z.flattenError(error).fieldErrors;
            console.log(errors);
        } else if (error.name === 'PrismaClientKnownRequestError') {
            switch (error.code) {
                case 'P2002':
                    errors = { title: ['Title must be unique'] };
                    break;
                case 'P2003':
                    errors = { category: ['Invalid category'] };
                    break;
            }
        } else {
            errorMessage = error.message || 'An unexpected error occurred';
        };

        res.status(400).render('movies/create', { movie: req.body, categoryOptions, errors, error: errorMessage })
    }
});

movieController.get('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const userId = req.user?.id;

    const movie = await movieService.getById(movieId);

    const isOwner = movie.userId && movie.userId === userId;

    const ratingStars = '&#x2605;'.repeat(Math.floor(movie.rating));

    res.render('movies/details', { movie, ratingStars, isOwner, pageTitle: 'Movie Details' });
});

movieController.get('/:movieId/attach', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    
    const movie = await movieService.getById(movieId);

    const artists = await artistService.getAll({ exclude: movie.artists.map(artist => artist.id) });

    res.render('movies/attach', { movie, artists, pageTitle: 'Attach Artist' })
});

movieController.post('/:movieId/attach', isAuth, async (req, res) => {
    const movieId = req.params.movieId;

    const artistId = req.body.artist;

    await movieService.attachArtist(movieId, artistId);

    res.redirect(`/movies/${movieId}`);
});

movieController.get('/:movieId/edit', isAuth, async (req, res) => {
    const movieId = Number(req.params.movieId);
    const userId = req.user.id;

    const movie = await movieService.getById(movieId);

    if(movie.userId !== userId) {
        res.status(401).send('Unauthorized')
    };

    const categoryOptions = prepareCategoryViewData(movie);

    res.render('movies/edit', { movie, categoryOptions, pageTitle: 'Edit Movie'});
});

movieController.post('/:movieId/edit', isAuth, async (req, res) => {
    const movieId = Number(req.params.movieId);
    const userId = req.user.id;
    const movieData = req.body;

    const movie = await movieService.edit(movieId, movieData, userId);

    res.redirect(`/movies/${movieId}`);
});

movieController.get('/:movieId/delete', isAuth, async (req, res) => {
    const userId = req.user.id;
    const movieId = Number(req.params.movieId);
    
    await movieService.remove(movieId, userId);

    res.redirect('/');
});

function prepareCategoryViewData(movie = {}) {
    const categories = ['TV Show', 'Animation', 'Movie', 'Documentary', 'Short Film'];

    const categoryOptions = categories.map(category => {
        const value = category.toLowerCase().replaceAll(' ', '-');

        const option = {
            value,
            label: category,
            selected: movie.category === value
        };

        return option
    });

    return categoryOptions;
}

export default movieController;