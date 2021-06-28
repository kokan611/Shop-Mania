import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc fetch all products
// @route GET /api/ products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc fetch all products
// @route GET /api/ single products
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error(`Product Not Found`);
  }
});

//@desc delete a products
// @route DELETE /api/products/:id
// @access Private admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove({ message: "Product removed" });
    res.json();
  } else {
    res.status(404);
    throw new Error(`Product Not Found`);
  }
});

//@desc Create a products
// @route POST /api/products/
// @access Private admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    category: "Sample Category",
    brand: "sample brand",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
    rating:5,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});
//@desc update a products
// @route PUT /api/products/:id
// @access Private admin

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    category,
    brand,
    countInStock,
    description
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name=name;
    product.price=price;
    product.image=image;
    product.brand=brand;
    product.category=category;
    product.countInStock=countInStock;
    product.description=description;
     const updateProduct = await product.save();
  res.status(201).json(updateProduct);
    
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
 
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
