const express = require("express");
const app = express();
const router = require("./apis/products/routes");
const morgan = require("morgan");

let products = require("./data");
const connectDb = require("./db/database");

app.use(express.json());
app.use(morgan("dev"));
connectDb();

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

app.use("/api/products", router);

// at the end
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
  // next();
});

app.listen(8001, () => {
  console.log("The application is running on localhost:8000");
});
