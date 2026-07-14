import { Router } from "express";
import authService from "../services/authService.js";
import { log } from "console";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { pageTitle: 'Register'});
});

authController.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    console.log(email);
    console.log(password);
    console.log(repeatPassword);

    await authService.register({ email, password, repeatPassword });

    res.redirect('/');
});

export default authController;