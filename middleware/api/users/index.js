import express from express;
import User from './userModel';

//1. Register a user
router.post('/', async (req, res) => {
    await User(req.body).save();
    res.status(201).json({
        code: 201,
        msg: 'Successfully created new user.'
    });
});

