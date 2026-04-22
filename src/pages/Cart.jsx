// src/pages/Cart.jsx
function Cart({ cartItems, setCartItems }) {

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(prev =>
      prev.filter(item => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Page</h2>

      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map(item => (
        <div key={item.id} style={{
          border: "1px solid #ccc",
          marginBottom: "10px",
          padding: "10px"
        }}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;