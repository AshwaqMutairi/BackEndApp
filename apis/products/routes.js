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

//new
router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

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
