const express = require("express");
// const products = require("../../data");
const {
  productListFetch,
  productDetailFetch,
  productCreate,
  productDelete,
} = require("./controllers");

//creating mini express app
const router = express.Router();

//get
router.get("/", productListFetch);
router.get("/:id", productDetailFetch);

//post
router.post("/", productCreate);

//delete
router.delete("/:id", productDelete);

module.exports = router;
