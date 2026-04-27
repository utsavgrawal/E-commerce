import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id
          ? {
              ...i,
              quantity:
                type === "inc"
                  ? i.quantity + 1
                  : Math.max(1, i.quantity - 1)
            }
          : i
      )
    );
  };

  const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className="p-6">
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => updateQty(item.id, "dec")}>-</button>
          {item.quantity}
          <button onClick={() => updateQty(item.id, "inc")}>+</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={() => navigate("/home")}>Continue</button>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}

export default Cart;