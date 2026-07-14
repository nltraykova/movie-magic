import { Router } from "express";
import authService from "../services/authService.js";
import { log } from "console";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { pageTitle: 'Register'});
});

authController.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    const token = await authService.register({ email, password, repeatPassword });

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

authController.get('/login', async (req, res) => {
    res.render('auth/login', { pageTitle: 'Login'});
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login({ email, password });

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    
    res.redirect('/');
});


export default authController;