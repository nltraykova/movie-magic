import { Router } from "express";
import artistService from "../services/artistService";

const artistController = Router();

artistController.get('/create', (req, res) => {
    res.render('artists/create', { pageTitle: 'Create artist' });
});

artistController.post('/create', async (req, res) =>{
    const artistData = req.body;

    await artistService.create(artistData);

    res.redirect('/');
});

export default artistController;
