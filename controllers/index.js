// Import just the router express
const router = require('express').Router();
const apiRoutes = require('./api');

const { User, Application, Interview } = require('../models');

// Handle API routes
router.use('/api', apiRoutes);

// Handle view routes
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

router.get('/applications/edit/:id', async (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    try {
        const appData = await Application.findByPk(req.params.id);
        const application = appData.get({ plain: true});

        res.render('application', { loggedIn: req.session.loggedIn, application });
    }catch(err) {

    }

});

// Get one application - application/:id
router.get('/application/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    try {
        const appData = await Application.findByPk(req.params.id);
        console.log(appData);
        const application = appData.get({ plain: true });

        res.render('single-app.hbs', { application });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    const applicationsData = await Application.findAll({
        where: { user_id: req.session.userId },
        include: [{ model: Interview }],
    });

    const applications = applicationsData.map((application) =>
        application.get({ plain: true })
    );

    res.render('dashboard', { applications, loggedIn: req.session.loggedIn });
});

router.get('/interviews', async (req, res) => {
    // Check that the user is logged in!
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('interviews', { applications, loggedIn: req.session.loggedIn });
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
