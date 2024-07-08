const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productsRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
//routes
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("hello from the node api and run");
});

//
//connecting to the database
mongoose
  .connect(
    "mongodb+srv://njorodev1319:1319Rip%40%23@backend.fbslqkv.mongodb.net/NodeDB?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
