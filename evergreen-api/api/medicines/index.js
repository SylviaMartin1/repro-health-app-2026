import express from 'express';
import Medicine from './medicineModel';
import asyncHandler from 'express-async-handler';
import authenticate from '../../authenticate/index.js';

const router = express.Router(); 

// Get all medicines
router.get('/', authenticate, async (req, res) => {
    const medicines = await Medicine.find({ userId: req.user._id });
    res.status(200).json(medicines);
});

// Create a medicine
router.post('/', authenticate, async (req, res) => {
    const medicine = await new Medicine({
        ...req.body,
        userId: req.user._id   
    }).save();
    res.status(201).json(medicine);
});

// Update a medicine
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;

    await Medicine.updateOne(
        { _id: req.params.id },
        req.body
    );

    const updatedMedicine = await Medicine.findById(req.params.id);

    if (updatedMedicine) {
        res.status(200).json(updatedMedicine);
    } else {
        res.status(404).json({ msg: 'Unable to find Medicine' });
    }
});

// Delete a cycle
router.delete('/:id', async (req, res) => {
    const result = await Medicine.deleteOne({
        _id: req.params.id
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Medicine' });
    }
});

// Get a user's medicines
router.get('/user/:uid', async (req, res) => {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
});


export default router;
