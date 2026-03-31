import jwt from 'jsonwebtoken';
import User from '../api/users/userModel';

const authenticate = async (request, response, next) => {
    try { 
        const authHeader = request.headers.authorization;
        if (!authHeader) throw new Error('No authorization header');

        const token = authHeader.split(" ")[1];
        if (!token) throw new Error('Bearer token not found');

        const decoded = await jwt.verify(token, process.env.SECRET); 
        console.log(decoded);

        // Assuming decoded contains an email field
        const user = await User.findByEmail(decoded.email); 
        if (!user) {
            throw new Error('User not found');
        }
        // Optionally attach the user to the request for further use
        request.user = user; 
        next();
    } catch(err) {
        next(new Error(`Verification Failed: ${err.message}`));
    }
};

export default authenticate;
