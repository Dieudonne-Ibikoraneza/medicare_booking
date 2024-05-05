import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        email,
        password: hashedPassword,
        role,
        gender,
        photo,
        name,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        email,
        password: hashedPassword,
        role,
        gender,
        photo,
        name,
      });
    }

    res
      .status(200)
      .json({ success: true, message: "User successfully created!" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, Try again!" + err });
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {}
};
