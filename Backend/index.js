import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.BookWorld;

try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to the MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`);
});
