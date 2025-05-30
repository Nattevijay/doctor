import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

app.use(express.json());
app.use(cors());

// API END POINTS
app.use("/api/admin", adminRouter);
// localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
// localhost:4000/api/doctor/list
app.use("/api/user", userRouter);
// localhost:4000/api/user/register

app.listen(port, () => {
  console.log("Server started", port);
});
