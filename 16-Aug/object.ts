type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 101,
  name: "Ravi",
};

type Product = {
  id: number;
  name: string;
  price?: number;
};

const product1: Product = {
  id: 1,
  name: "laptop",
  price: 75000,
};

const product2: Product = {
  id: 2,
  name: "Shoes",
};
