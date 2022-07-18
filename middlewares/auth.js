import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1]; // 'Barear fbashjvsdjzfvwue'
    //const token = authHeader && authHeader.split(" ")[1]; //['Barear', 'sdkfbsfsi'];
  if (!token)
  return res.status(401).json({ message: "token not found" });
    /* const decodedData = await jwt.verify(token, process.env.ACCESS_SECRET);  //if the secret is matching returns back the payload
    req.userId = decodedData?.id */
      jwt.verify(token, process.env.ACCESS_SECRET, (err, payload) => {
      if (err) throw new Error("token not verified");
      req.userId = payload.id;
      next()})
  } catch (error) {
    res.json({message: error.message})
  }
};

export default authenticateToken;
