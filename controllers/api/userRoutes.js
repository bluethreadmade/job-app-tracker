// require router function of express
const router = require('express').Router();
// require the user model
const { User } = require('../../models');

// Create new user/api/users
router.post('/api', async (req,res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        // set session variable loggedIn to true after creating user
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// login
router.post('/login', async (req,res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        // check if the user (email) exists in the database
        if (!userData) {
            res
            .status(400)
            .json({ message: 'No User with that email. Please try again'});
            
            return;
        }
        // set the variable validPassword to equal the output of the method checkPassword - agaignst the request body password
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again'})

            return;
        }

        // if a valid email and password have been input, set the session variable to loggedIn
        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: userData, message: 'You are now logged in'});
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);        
    }
})

// logout

module.exports = router;