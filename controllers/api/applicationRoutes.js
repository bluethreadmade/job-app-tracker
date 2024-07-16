// require router function of express
const router = require('express').Router();
// require the user model
const { Application } = require('../../models');

// Create new application - /api/applications
router.get('/', async (req, res) => {
    try {
        const applicationData = await Application.findAll({
            where: { user_id: req.session.userId },
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
    try {
        const applicationData = await Application.create({
            company: req.body.company,
            position: req.body.position,
            link_to_posting: req.body.link_to_posting,
            status: req.body.status,
            location: req.body.location,
            interest_level: req.body.interest_level,
            notes: req.body.notes,
            response_received_date: req.body.response_received_date,
            application_submitted_date: req.body.application_submitted_date,
            work_site: req.body.work_site,
            user_id: req.session.userId,
        });

        res.status(200).json(applicationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one application - /api/application/:id
router.get('/:id', async (req, res) => {
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