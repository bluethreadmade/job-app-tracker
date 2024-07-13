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

// logout

module.exports = router;