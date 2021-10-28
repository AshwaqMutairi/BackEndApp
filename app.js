const express = require("express");
const app = express();
const router = require("./apis/products/routes");
const morgan = require("morgan");

let products = require("./data");
const connectDb = require("./db/database");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", router);

connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
