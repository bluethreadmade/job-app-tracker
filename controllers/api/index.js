// require router function of express
const router = require('express').Router();

// point userRoutes const to the userRoutes file
const userRoutes = require('./userRoutes');
const interviewRoutes = require('./interviewRoutes');
const applicationRoutes = require('./applicationRoutes');


router.use('/users', userRoutes);
router.use('/interviews', interviewRoutes);
router.use('/application', applicationRoutes);


module.exports = router;
