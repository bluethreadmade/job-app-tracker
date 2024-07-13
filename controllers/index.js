// Import just the router express
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/applications', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('application');
});

router.get('/dashboard', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('dashboard');
});

router.get('/interviews', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('interviews');
});

router.get('/login', (req, res) => {
    // TODO: Check that the user is NOT logged in here!
    res.render('login');
});

router.get('/signup', (req, res) => {
    // TODO: Check that the user is NOT logged in here!
    res.render('signup');
});

module.exports = router;
