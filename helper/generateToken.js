import jwt from "jsonwebtoken";

const generateToken = (payload) => {
    return jwt.sign(
         payload,
         process.env.ACCESS_SECRET,
         { expiresIn: '172800s' }
        );
 }
 
 
 export default generateToken