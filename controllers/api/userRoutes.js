// require router function of express
const router = require('express').Router();
// require the user model
const { User, Application } = require('../../models');

// Create new user - /api/users
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        // set session variable loggedIn to true after creating user
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id;

            res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login - /api/users/login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email },
        });

        // check if the user (email) exists in the database
        if (!userData) {
            res.status(400).json({
                message: 'Incorrect credentials. Please try again',
            });

            return;
        }
        // set the variable validPassword to equal the output of the method checkPassword - agaignst the request body password
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect credentials. Please try again',
            });

            return;
        }

        // if a valid email and password have been input, set the session variable to loggedIn
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id;

            res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {
    // if the user is logged in
    if (req.session.loggedIn) {
        // destroy the session
        req.session.destroy(() => {
            res.redirect('/');
        });
        // if the user is not logged in send an error
    } else {
        res.status(404).end();
    }
});

// Get one application **DEV ROUTE** - /api/users/application/:id
router.get('/application/:id', async (req, res) => {
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


module.exports = router;
