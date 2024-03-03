const { getProducts } = require("../services/products");

function getProductsController(req, res) {
  const products = getProducts();
  res.status(200).json({ count: products.length, data: products });
}

module.exports = { getProductsController };
