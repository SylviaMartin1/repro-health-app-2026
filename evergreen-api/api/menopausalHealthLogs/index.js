import express from 'express';
import MenopausalHealthLog from './menopausalHealthModel.js';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';

const router = express.Router(); 

// Get all menopausal health logs
router.get('/', authenticate, async (req, res) => {
    const menopausalHealthLogs = await MenopausalHealthLog.find({ userId: req.user._id });
    res.status(200).json(menopausalHealthLogs);
});

// Create a menopausal health log
router.post('/', authenticate, async (req, res) => {
    const menopausalHealthLog = await new MenopausalHealthLog({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(menopausalHealthLog);
});

// Update a menopausal health log
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    await MenopausalHealthLog.updateOne(
        { _id: req.params.id },
        req.body
    );
    const updatedMenopausalHealthLog = await MenopausalHealthLog.findById(req.params.id);
    if (updatedMenopausalHealthLog) {
        res.status(200).json(updatedMenopausalHealthLog);
    } else {
        res.status(404).json({ msg: 'Unable to find Menopausal Health Log' });
    }
});

// Delete a menopausal health log
router.delete('/:id', async (req, res) => {
    const result = await MenopausalHealthLog.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Menopausal Health Log' });
    }
});

// Get a user's menopausal health logs
router.get('/user/:uid', async (req, res) => {
    const menopausalHealthLogs = await MenopausalHealthLog.find();
    res.status(200).json(menopausalHealthLogs);
});


export default router;
