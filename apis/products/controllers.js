const products = require("../../data");
const Product = require("../../db/models/Product");

//LIST FETCH 👍🏻
exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    // return res.status(500).json({ message: error.message });
    next(error);
  }
};

// //DETAIL FETCH 👍🏻
// exports.productDetailFetch = async (req, res, next) => {
//   const { productId } = req.params;
//   try {
//     const product = await Product.findById(productId);

//     if (product) {
//       res.json(product);
//     } else {
//       next({
//         status: 404,
//         message: "Opps! this product is not found SO cant be fitched!d",
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

//inhanced detailFitch midll
exports.productDetailFetch = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

//CREAT 👍🏻
exports.productCreate = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

//new DELETE

exports.productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// //DELETE 👍🏻
// exports.productDelete = async (req, res, next) => {
//   const { productId } = req.params;
//   try {
//     const product = await Product.findById(productId);

//     if (product) {
//       await product.remove();
//       return res.status(204).end();
//     } else {
//       //   return res.status(404).json({
//       //     message: "Opps! this product is not found SO cant be deleted",
//       //   });
//       next({ status: 404, message: "Product Not Found" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

//new Update

exports.productUpdate = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//UPDATE 👍🏻
// exports.productUpdate = async (req, res, next) => {
//   const { productId } = req.params;
//   try {
//     const product = await Product.findById(productId);

//     if (product) {
//       const updatedProduct = await product.updateOne(req.body, { new: true });
//       return res.json(updatedProduct);
//     } else {
//       next({ status: 404, message: "Product Not Found" });
//     }
//   } catch (error) {
//     // return res.status(500).json({
//     //   message: error.message,
//     // });
//     next(error);
//   }
// };
