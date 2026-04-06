import express from 'express';
import HealthCheckup from './HealthCheckupModel';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';

const router = express.Router(); 

// Get all health checkups
router.get('/', authenticate, async (req, res) => {
    const healthCheckups = await HealthCheckup.find({ userId: req.user._id });
    res.status(200).json(healthCheckups);
});

// Create a health checkup
router.post('/', authenticate, async (req, res) => {
    const healthCheckup = await new HealthCheckup({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(healthCheckup);
});

// Update a health checkup
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;

    await HealthCheckup.updateOne(
        { _id: req.params.id },
        req.body
    );

    const updatedHealthCheckup = await HealthCheckup.findById(req.params.id);

    if (updatedHealthCheckup) {
        res.status(200).json(updatedHealthCheckup);
    } else {
        res.status(404).json({ msg: 'Unable to find Checkup' });
    }
});

// Delete a health checkup
router.delete('/:id', async (req, res) => {
    const result = await HealthCheckup.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Checkup' });
    }
});

// Get a user's health checkups
router.get('/user/:uid', async (req, res) => {
    const healthCheckups = await HealthCheckup.find();
    res.status(200).json(healthCheckups);
});


export default router;
