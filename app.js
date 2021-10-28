const express = require("express");
const app = express();

const router = require("./apis/products/routes");
let products = require("./data");
const connectDb = require("./database");

app.use(express.json());
app.use(router);

connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
