import express from 'express';
import User from './userModel';

const router = express.Router()

//1. Register a user
router.post('/', async (req, res) => {
    await User(req.body).save();
    res.status(201).json({
        code: 201,
        msg: 'Successfully created new user.'
    });
});

//2. Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

export default router;



