import express from 'express';
import MaleHealthLog from './maleHealthModel.js';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';

const router = express.Router(); 

// Get all male health logs
router.get('/', authenticate, async (req, res) => {
    const maleHealthLogs = await MaleHealthLog.find({ userId: req.user._id });
    res.status(200).json(maleHealthLogs);
});

// Create a male health log
router.post('/', authenticate, async (req, res) => {
    const maleHealthLog = await new MaleHealthLog({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(maleHealthLog);
});

// Update a male health log
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    await MaleHealthLog.updateOne(
        { _id: req.params.id },
        req.body
    );
    const updatedMaleHealthLog = await MaleHealthLog.findById(req.params.id);
    if (updatedMaleHealthLog) {
        res.status(200).json(updatedMaleHealthLog);
    } else {
        res.status(404).json({ msg: 'Unable to find Male Health Log' });
    }
});

// Delete a male health log
router.delete('/:id', async (req, res) => {
    const result = await MaleHealthLog.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Male Health Log' });
    }
});

// Get a user's male health logs
router.get('/user/:uid', async (req, res) => {
    const maleHealthLogs = await MaleHealthLog.find();
    res.status(200).json(maleHealthLogs);
});


export default router;
