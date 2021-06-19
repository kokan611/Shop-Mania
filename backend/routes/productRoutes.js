 import express from "express"
// import asyncHandler from "express-async-handler";
 const router = express.Router();
import {getProducts,getProductById} from "../controllers/productControllers.js"

// //@desc fetch all products
// // @route GET /api/ products
// // @access Public

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);



// //@desc fetch all products
// // @route GET /api/ single products
// // @access Public


// router.get("/:id",asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) res.json(product);
//     else {
//       res.status(404);
//       throw new Error (`Product Not Found` );
//     }}
//   ));

 export default router;
