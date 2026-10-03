import { useState, useMemo } from "react";
import { products } from "../data/products";

export function EcomHome() {
  // search
  const [search, setSearch] = useState("");
  // category
  const [category, setCategory] = useState("All");
  // count
  const [count, setCount] = useState(0);

  const filterProducts = () => {
    console.log("Filterning products...");

    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesCategory && matchesSearch;
    });
  };

  const filteredProducts = useMemo(() => filterProducts(), [search, category]);

  return (
    <div>
      <h1>Product Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>

      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Inc</button>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
