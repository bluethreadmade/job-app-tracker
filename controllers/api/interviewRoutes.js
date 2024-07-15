// require router function of express
const router = require('express').Router();
// require the user model
const { Interview } = require('../../models');

// Create new interview - /api/interviews
router.post('/', async (req, res) => {
    try {
        const interviewData = await Interview.create({
            date: req.body.date,
            time: req.body.time,
            location: req.body.location,
            notes: req.body.notes,
            application_id: req.body.application_id,
        });

        res.status(200).json(interviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update interview - /api/interviews/:id
router.put('/:id', async (req, res) => {
    try {
        const interviewData = await Interview.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!interviewData) {
            res.status(404).json({
                message: 'No interview found with this id!',
            });
            return;
        }

        res.status(200).json(interviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete interview - /api/interviews/:id
router.delete('/:id', async (req, res) => {
    try {
        const interviewData = await Interview.destroy({
            where: { id: req.params.id },
        });

        if (!interviewData) {
            res.status(404).json({
                message: 'No interview found with this id!',
            });
            return;
        }

        res.status(200).json(interviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
