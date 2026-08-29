class Product1 {
  id: number;
  name: string;
  price: number;

  // this constructor will be called automatically when you create the instance of the class.
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const prod1 = new Product1(101, "iphone 15", 69999);

console.log(prod1);
