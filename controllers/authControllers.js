import UserSightSpot from "../models/UserSightSpot.js";
import { validationResult } from "express-validator";
import generateToken from "../helper/generateToken.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  
  const { name, password, email } = req.body;

  const user = await UserSightSpot.findByEmail(email);

  if (user) return res.status(409).json({ msg: "Sorry the e-mail already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const Id = (await UserSightSpot.find()).length + 1;
  const UserSight = await UserSightSpot.create({
    name,
    email,
    password: hashedPassword,
    id: Id,
  });
  const payload = {
    id: Id,
    name: UserSight.name,
  };

  const token = generateToken(payload);

  try {
    await UserSight.save();
    res.status(200).json({ user: UserSight, token, msg: "Thank you for signing up!" });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserSightSpot.findByEmail(email);
    if (!user)
    return res.status(404).json({
      message: `Either email or password is not correct !!!`,
    });
    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: `Either email or password is not correct !!!`,
      });
    }
  
    const token = generateToken({ id: user.id, name: user.name });
  
    res.status(200).json({
      message: "you are logged in !!!",
      token: token,
      user: user,
    });
  };
  
  const getAllUsers = async (req, res) => {
    const { email } = req.body;
    const users = await UserSightSpot.findByEmail(email);
    res.status(200).json(users);
  };

export { registerUser, loginUser, getAllUsers };