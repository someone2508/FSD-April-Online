// const product = {
//   id: 101,
//   name: "iPhone 15",
//   price: 69999,
// };

// const product1 = {
//   id: 102,
//   name: "iPhone 16",
//   price: 89999,
// };

// const product2 = {
//   id: "p103",
//   name: "cookies",
//   price: 99,
// };

// const product3 = {
//   id: "prod104",
//   name: "100% pure cow milk",
//   price: "twenty nine ruppes",
// };

// loose class representation

class Product {
  id: number;
  name: string;
  price: number;
}

// instance/object of a class

const product1 = new Product();

product1.id = 101;
product1.name = "iphone 15";
product1.price = 69999;

console.log(product1);
