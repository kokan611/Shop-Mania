import express from "express";
const app = express();
import dotenv from "dotenv";
import path from "path"
import connectDB from "./config/db.js";
import {notFound,errorHandler} from "./middleware/errorMiddleware.js"
import cors from "cors";
app.use(cors());
dotenv.config();
connectDB();
import productRoutes from "./routes/productRoutes.js";

import userRoutes from "./routes/userRoutes.js";

import orderRoutes from "./routes/orderRoutes.js";

import uploadRoutes from "./routes/uploadRoutes.js";
import morgan from "morgan";

app.get("/", (req, res) => {
  res.send("Api running");
});
if(process.env.NODE_ENV==='development')
{
  app.use(morgan("dev"));
}

app.use(express.json()); 
app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);

app.use("/api/upload", uploadRoutes);
app.get("/api/config/Paypal",(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID)
});
const __dirname=path.resolve();
app.use('/uploads',express.static(path.join(__dirname,"/uploads")));
app.get("/api/config/Razorpay", (req, res) => {
  res.send(process.env.RAZORPAY_CLIENT_ID);
});

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const msg = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running in ${msg} on port ${PORT}`.yellow.bold);
});


import Razorpay from "razorpay";
import shortid from "shortid";
let razorpay = new Razorpay({
  key_id: "rzp_test_JfolCVsULwRCzE",
  key_secret: "4uJkwcaFrFCyHdMOua6KEBGu",
});
app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 5;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  const response = await razorpay.orders.create(options);
  console.log(response);
  res.json({
    id: response.id,
    currency: response.currency,
    amount: amount.currency,
  });
});