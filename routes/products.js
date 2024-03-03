const express = require("express");
const { getProductsController } = require("../controllers/products");

const productsRouter = express.Router();
productsRouter
  .route("/")
  .get((req, res) => res.status(200).json({ message: "get products" }))
  .post((req, res) => res.status(201).json({ message: "posted products" }));

productsRouter.route("/v1").get(getProductsController);

module.exports = { productsRouter };
