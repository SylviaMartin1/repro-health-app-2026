import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken';

const router = express.Router()

//1. Register a user or authenticate a user
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Email and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

//2. Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});


async function registerUser(req, res) {
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(req.body.password)) {
    return res.status(400).json({ msg: "Weak password." });
    }
    await User.create(req.body);
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
    const user = await User.findByEmail(req.body.email);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ email: user.email }, process.env.SECRET);
        res.status(200).json({ 
            success: true,
            token: 'BEARER ' + token,
            user: {
                _id: user._id,
                email: user.email,
                lifeStage: user.lifeStage, 
                role: user.role
            }
         });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}

router.get('/profile', asyncHandler(async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ msg: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ email: decoded.email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({
            _id: user._id,
            email: user.email,
            lifeStage: user.lifeStage,
            role: user.role
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}));

router.post("/make-admin", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  user.role = "admin";
  await user.save();

  res.json({
    msg: "User promoted to admin",
    user
  });
});







export default router;



