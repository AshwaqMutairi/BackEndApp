const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: {
      type: Number,
      default: 5,
    },
    price: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
