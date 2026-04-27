import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout({ cartItems = [] }) {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!cartItems.length) {
      toast("Cart is empty ❌");
      return;
    }

    toast.success("Order placed successfully 🎉");

    // 👉 future: clear cart
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* 🛒 ITEMS */}
      <div className="space-y-3">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex justify-between bg-gray-900 p-3 rounded"
          >
            <span className="text-sm">{item.title}</span>
            <span>
              ₹{item.price} × {item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* 💰 TOTAL */}
      <div className="mt-6 flex justify-between items-center bg-gray-900 p-4 rounded">
        <h2 className="text-lg font-semibold">
          Total: ₹{total.toFixed(2)}
        </h2>

        <button
          onClick={placeOrder}
          className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded"
        >
          Place Order
        </button>
      </div>

    </div>
  );
}

export default Checkout;