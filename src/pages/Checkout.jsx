import toast from "react-hot-toast";

function Checkout({ cartItems }) {
  const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className="p-6">
      <h1>Checkout</h1>
      <h2>Total: ₹{total}</h2>

      <button onClick={() => toast.success("Order placed!")}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;