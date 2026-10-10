const price = Number(process.argv[2]);
const quantity = Number(process.argv[3]);
const tax = Number(process.argv[4]);

const subtotal = price * quantity;
const taxAmount = subtotal * (tax / 100);
const total = subtotal + taxAmount;

console.log("Subtotal : ", subtotal);
console.log("Tax : ", taxAmount);
console.log("Total : ", total);
