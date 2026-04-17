import express from 'express';
import Cycle from './cycleModel';
import User from "../users/userModel";
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';
import jwt from "jsonwebtoken";


const router = express.Router(); 

// Get all cycles
router.get('/', authenticate, async (req, res) => {
    const cycles = await Cycle.find({ userId: req.user._id });
    res.status(200).json(cycles);
});

// Create a cycle
router.post('/', authenticate, async (req, res) => {
    const cycle = await new Cycle({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(cycle);
});


// Update a cycle
/* router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Cycle.updateOne({
        _id: req.params.id
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Cycle Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Cycle' });
    }
}); */
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;

    await Cycle.updateOne(
        { _id: req.params.id },
        req.body
    );

    const updatedCycle = await Cycle.findById(req.params.id);

    if (updatedCycle) {
        res.status(200).json(updatedCycle);
    } else {
        res.status(404).json({ msg: 'Unable to find Cycle' });
    }
});

// Delete a cycle
router.delete('/:id', async (req, res) => {
    const result = await Cycle.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Cycle' });
    }
});

// Get a user's cycles
router.get('/user/:uid', async (req, res) => {
    const cycles = await Cycle.find();
    res.status(200).json(cycles);
});

router.get('/partner', asyncHandler(async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET);
  const user = await User.findOne({ email: decoded.email });

  if (!user?.partner) return res.json([]);

  const cycles = await Cycle.find({ userId: user.partner });

  res.json(cycles);
}));




export default router;
