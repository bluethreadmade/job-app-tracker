// require router function of express
const router = require('express').Router();
// require the user model
const { Application, User } = require('../../models');

// Check that the user is logged in for all of these routes
router.use('/', (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).end();
    }

    next();
});

// Create new application - /api/applications
router.get('/', async (req, res) => {
    try {
        const applicationData = await Application.findAll({
            where: { user_id: req.session.userId },
            include: [{ model: User }],
        });

        const applications = applicationData.map((application) => {
            return application.get({ plain: true });
        });

        res.status(200).json(applications);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create new application - /api/applications
router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const applicationData = await Application.create({
            ...req.body,
            user_id: req.session.userId,
        });

        res.status(200).json(applicationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update application - /api/application/:id
router.put('/:id', async (req, res) => {
    try {
        const applicationData = await Application.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!applicationData) {
            res.status(404).json({
                message: 'No application found with this id!',
            });
            return;
        }

        res.status(200).json(applicationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete application - /api/application/:id
router.delete('/:id', async (req, res) => {
    try {
        const applicationData = await Application.destroy({
            where: { id: req.params.id },
        });

        if (!applicationData) {
            res.status(404).json({
                message: 'No application found with this id!',
            });
            return;
        }

        res.status(200).json(applicationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
