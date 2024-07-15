// Import just the router express
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/application', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('application', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('dashboard', { loggedIn: req.session.loggedIn });
});

router.get('/interviews', (req, res) => {
    // TODO: Check that the user is logged in here!
    res.render('interviews', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    // TODO: Check that the user is NOT logged in here!
    res.render('login', { loggedIn: req.session.loggedIn });
});

router.get('/signup', (req, res) => {
    // TODO: Check that the user is NOT logged in here!
    res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router;
