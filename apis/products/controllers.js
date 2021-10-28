const products = require("../../data");
const Product = require("../../db/models/Product");

//LIST FETCH 👍🏻
exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // console.log("error! sorry cant FETCH the products list");
  }
};

//DETAIL FETCH 👍🏻
exports.productDetailFetch = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (product) {
      res.json(product);
    } else {
      return res
        .status(404)
        .json("Opps! this product is not found SO cant be fitched!");
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//CREAT 👍🏻
exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error! sorry cant creat this product" });
  }
};

//DELETE 👍🏻
exports.productDelete = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({
        message: "Opps! this product is not found SO cant be deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error! sorry cant DELETE this product",
    });
  }
};

//UPDATE 👍🏻
exports.productUpdate = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (product) {
      const updatedProduct = await product.updateOne(req.body, { new: true });
      return res.json(updatedProduct);
    } else {
      return res.status(404).json({
        message: "Opps! cant UPDATE",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
