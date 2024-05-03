import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY, {
      expiresIn: "15d"
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, gender, photo } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    // check if user exists or not

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // hash password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, Try again" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = null;

    // Check if the user is a patient
    const patient = await User.findOne({ email });
    if (patient) {
      user = patient;
    }

    // If not a patient, check if the user is a doctor
    if (!user) {
      const doctor = await Doctor.findOne({ email });
      if (doctor) {
        user = doctor;
      }
    }

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Return user data and token
    const { password: userPassword, ...userData } = user._doc;
    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: userData,
      role: user.constructor.modelName, // This will return either "User" or "Doctor"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to login!" });
  }
};
