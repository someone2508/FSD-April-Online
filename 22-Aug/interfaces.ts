// type User = {
//   name: string;
//   age: number;
// };

interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Abhishek",
  age: 20,
};

const user3: User = {
  name: "Nitesh",
};

interface Product {
  readonly id: number;
  readonly name: string;
  readonly price: number;
}

let prod1: Product = {
  id: 101,
  name: "mobile",
  price: 20000,
};

prod1.id = 105;
prod1.price = 30000;
