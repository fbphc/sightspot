import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "23330s" });
};

export default generateToken;
