import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {notFound,errorHandler} from "./middleware/errorMiddleware.js"
dotenv.config();
connectDB();
import productRoutes from "./routes/productRoutes.js";

import userRoutes from "./routes/userRoutes.js";

app.get("/", (req, res) => {
  res.send("Api running");
});
app.use(express.json()); 
app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const msg = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running in ${msg} on port ${PORT}`.yellow.bold);
});
