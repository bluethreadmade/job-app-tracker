// Import just the router express
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/application', (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('application', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('dashboard', { loggedIn: req.session.loggedIn });
});

router.get('/interviews', (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('interviews', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    // Check if the user is logged in already
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login', { loggedIn: req.session.loggedIn });
});

router.get('/signup', (req, res) => {
    // Check if the user is logged in already
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router;
