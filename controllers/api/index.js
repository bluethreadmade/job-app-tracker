// require router function of express
const router = require('express').Router();

// point userRoutes const to the userRoutes file
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;