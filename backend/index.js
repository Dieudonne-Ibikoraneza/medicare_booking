import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongoURL = process.env.MONGO_URL;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

//database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Database is connected");
  } catch (err) {
    console.log("Mongodb Database connection failed");
  }
};
//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute)

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
