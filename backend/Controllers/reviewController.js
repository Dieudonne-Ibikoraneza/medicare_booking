import Review from "../models/ReviewSchema.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

//get All reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res
      .status(200)
      .json({ success: true, message: "Successful", data: reviews });
  } catch (err) {
    res
      .status(500)
      .json({ success: true, message: "Successful" });
  }
};
