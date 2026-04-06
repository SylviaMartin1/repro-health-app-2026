import express from 'express';
import LifeStyleLog from './lifeStyleLogModel.js';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';

const router = express.Router(); 

// Get all life style logs
router.get('/', authenticate, async (req, res) => {
    const lifeStyleLogs = await LifeStyleLog.find({ userId: req.user._id });
    res.status(200).json(lifeStyleLogs);
});

// Create a life style log
router.post('/', authenticate, async (req, res) => {
    const lifeStyleLog = await new LifeStyleLog({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(lifeStyleLog);
});

// Update a life style log
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    await LifeStyleLog.updateOne(
        { _id: req.params.id },
        req.body
    );
    const updatedLifeStyleLog = await LifeStyleLog.findById(req.params.id);
    if (updatedLifeStyleLog) {
        res.status(200).json(updatedLifeStyleLog);
    } else {
        res.status(404).json({ msg: 'Unable to find Life Style Log' });
    }
});

// Delete a life style log
router.delete('/:id', async (req, res) => {
    const result = await LifeStyleLog.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Life Style Log' });
    }
});

// Get a user's lifestyle logs
router.get('/user/:uid', async (req, res) => {
    const lifeStyleLogs = await LifeStyleLog.find();
    res.status(200).json(lifeStyleLogs);
});


export default router;
