const products = [
  {
    name: "laptop",
    price: 60000,
  },
  {
    name: "phone",
    price: 30000,
  },
  {
    name: "headphone",
    price: 5000,
  },
];

const mainElem = document.getElementById("products");

products.forEach((product) => {
  const div = document.createElement("div");

  div.className = "product";

  div.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price}</p>
    `;

  mainElem.appendChild(div);
});
