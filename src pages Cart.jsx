import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Cart() {
  useDocumentTitle("Cart - Course Catalog");

  // Redux: read the cart items
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-3">
      <h2 className="mb-3">Your Cart</h2>

      {/* Ternary Operator: empty state vs list of items */}
      {items.length === 0 ? (
        <p className="text-muted">Your cart is empty. Add a course to get started.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  {item.title} - ${item.price.toFixed(2)}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Total: ${total.toFixed(2)}</h5>
            <button className="btn btn-outline-secondary" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
