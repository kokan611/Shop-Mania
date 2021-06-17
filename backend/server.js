import express from "express";
const app = express();
import dotenv from "dotenv";
import products from "./data/products.js"
import connectDB from "./config/db.js"
dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("Api running");
});


app.get("/api/products",(req,res)=>{
    res.json(products);
});

app.get("/api/products/:id",(req,res)=>{
const product= products.find(p=>p._id===req.params.id)
    res.json(product);
});



const PORT = process.env.PORT||5000;
const msg=process.env.NODE_ENV;

app.listen(PORT,()=>{
    console.log(`Server running in ${msg} on port ${PORT}`.yellow.bold)
});