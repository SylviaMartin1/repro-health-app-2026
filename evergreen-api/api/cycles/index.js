import express from 'express';
import Cycle from './cycleModel';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';


const router = express.Router(); 

// Get all cycles
router.get('/', authenticate, async (req, res) => {
    const cycles = await Cycle.find({ userId: req.user._id });
    res.status(200).json(cycles);
});

// Create a cycle
router.post('/', authenticate, async (req, res) => {
    const cycle = await Cycle (req.body).save();
    res.status(201).json(cycle);
});


// Update a cycle
router.put('/:id', authenticate, async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Cycle.updateOne({
        _id: req.params.id,
        userId: req.user._id
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Cycle Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Cycle' });
    }
});

// Delete a cycle
router.delete('/:id', authenticate, async (req, res) => {
    const result = await Cycle.deleteOne({
        _id: req.params.id,
        userId: req.user._id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Cycle' });
    }
});

// Get a user's cycles
router.get('/user/:uid', async (req, res) => {
    const cycles = await Cycle.find({ userId: `${req.params.uid}`});
    res.status(200).json(cycles);
});


export default router;
