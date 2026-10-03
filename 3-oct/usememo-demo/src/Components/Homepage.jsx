import { useReducer } from "react";
import { products } from "../data/products";
import { inititalState, cartReducer } from "../Untils/Reducer";

export function Homepage() {
  const [state, dispatch] = useReducer(cartReducer, inititalState);

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shoping Cart</h1>

      <hr />

      <h2>Products</h2>

      {products.map((product) => (
        <div>
          <h3>{product.name}</h3>
          <p>Price : {product.price}</p>
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            Add to cart
          </button>

          <hr />
        </div>
      ))}

      <h2>Cart</h2>

      <p>Total Items: {totalItems}</p>

      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {state.items.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity : {item.quantity}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "INCREASE_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                Increment
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "DECREASE_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                Decrement
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
                }
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}
