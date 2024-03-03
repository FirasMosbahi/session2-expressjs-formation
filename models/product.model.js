class Product {
  id;
  name;
  qty;
  price;
  constructor(id, name, qty, price) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.price = price;
  }
}

module.exports = { Product };
