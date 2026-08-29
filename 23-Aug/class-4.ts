import { Product2 } from "./class-3";

class Cart {
  items: Product2[];

  constructor() {
    this.items = [];
  }

  addProduct(product: Product2): void {
    this.items.push(product);
  }

  getAllProducts(): Product2[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sumTillNow, eProd) => {
      return sumTillNow + eProd.price;
    }, 0);
  }
}

const cart = new Cart();

cart.addProduct(new Product2(101, "iphone 15", 69999));
cart.addProduct(new Product2(102, "iphone 16", 89999));

let allProducts = cart.getAllProducts();

console.log(allProducts);

let totalPayable = cart.getTotalPrice();

console.log(totalPayable);
