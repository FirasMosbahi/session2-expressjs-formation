const { Product } = require("../models/product.model");
const products = [
  new Product(1, "Laptop", 10, 999.99),
  new Product(2, "Smartphone", 15, 599.99),
  new Product(3, "Headphones", 30, 199.99),
  new Product(4, "Keyboard", 25, 49.99),
  new Product(5, "Mouse", 60, 29.99),
  new Product(6, "Monitor", 20, 149.99),
  new Product(7, "Tablet", 18, 399.99),
  new Product(8, "Smartwatch", 40, 199.99),
  new Product(9, "Camera", 12, 499.99),
  new Product(10, "Speaker", 35, 99.99),
];

function getProducts() {
  return products;
}

module.exports = { getProducts };
