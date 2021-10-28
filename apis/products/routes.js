const express = require("express");
// const products = require("../../data");
const {
  productListFetch,
  productDetailFetch,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

//creating mini express app
const router = express.Router();

//get
router.get("/", productListFetch);
router.get("/:productId", productDetailFetch);

//post
router.post("/", productCreate);

//delete
router.delete("/:productId", productDelete);

//update
router.put("/:productId", productUpdate);

module.exports = router;
