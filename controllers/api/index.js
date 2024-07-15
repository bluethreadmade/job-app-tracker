// require router function of express
const router = require('express').Router();

// point userRoutes const to the userRoutes file
const userRoutes = require('./userRoutes');
const interviewRoutes = require('./interviewRoutes');

router.use('/users', userRoutes);
router.use('/interviews', interviewRoutes);

module.exports = router;
