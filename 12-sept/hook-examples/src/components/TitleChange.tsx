import { useState, useEffect } from "react";

export function TitleChange() {
  const [page, setPage] = useState("products");
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    // change the title
    if (page === "products") {
      document.title = "Products | ShopEasy";
    } else if (page === "cart") {
      document.title = `Cart ${cartCount} | ShopEasy`;
    }
  }, [page, cartCount]);

  return (
    <div>
      <h1>ShopEasy</h1>

      <button onClick={() => setPage("products")}>Products</button>

      <button onClick={() => setPage("cart")}>Cart</button>

      <h2>Current Page : {page}</h2>

      <button onClick={() => setCartCount((currVal) => currVal - 1)}>
        Decrease Cart Count
      </button>
      <button onClick={() => setCartCount((currVal) => currVal + 1)}>
        Increase Cart Count
      </button>
    </div>
  );
}

export default App;
