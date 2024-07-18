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

router.post('/login', async (req, res) => {
    try {
        // Attempt to find the user by email on the database
        const userData = await User.scope('withPassword').findOne({
            where: { email: req.body.email },
        });

        // If ther user couldnt be found by the email...
        if (!userData) {
            res.status(400).json({
                message: 'Incorrect credentials. Please try again',
            });

            return;
        }

        // Check if the given password matches with the user on our
        // database
        const validPassword = await userData.checkPassword(req.body.password);

        // If the password doesnt match, this isnt a valid login
        // attempt
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect credentials. Please try again',
            });

            return;
        }

        // If a valid email and password have been input
        // set the session variable to loggedIn and keep
        // a record of the user's id
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id;

            res.redirect('/');
        });
    } catch (err) {
        // Catch any unexpected errors with the login system
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

module.exports = router;
