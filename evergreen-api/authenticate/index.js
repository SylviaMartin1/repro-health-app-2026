import jwt from 'jsonwebtoken';
import User from '../api/users/userModel.js';

const authenticate = async (req, res, next) => {
  try {
    // 1. Get header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.SECRET);

    // 4. Find user
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    // 5. Attach user
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

export default authenticate;