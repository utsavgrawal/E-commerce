import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Cart({ cartItems = [], setCartItems }) {
  const navigate = useNavigate();

  // ➕➖ UPDATE QUANTITY
  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1)
            }
          : item
      )
    );
  };

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
    toast("Item removed ❌");
  };

  // 💰 TOTAL PRICE
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 😢 EMPTY CART
  if (!cartItems.length) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-xl mb-4">Your cart is empty 😢</h2>

        <button
          onClick={() => navigate("/home")}
          className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* 🛒 ITEMS */}
      <div className="space-y-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-lg shadow"
          >
            {/* 🖼 IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain"
            />

            {/* 📦 DETAILS */}
            <div className="flex-1">
              <h3 className="text-sm">{item.title}</h3>
              <p className="text-pink-400 font-bold">
                ₹{item.price}
              </p>
            </div>

            {/* ➕➖ QUANTITY */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, "dec")}
                className="px-3 py-1 bg-gray-800 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQty(item.id, "inc")}
                className="px-3 py-1 bg-gray-800 rounded"
              >
                +
              </button>
            </div>

            {/* ❌ REMOVE */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* 💰 TOTAL SECTION */}
      <div className="mt-6 p-4 bg-gray-900 text-white rounded-lg shadow flex justify-between items-center">

        <h2 className="text-lg font-semibold">
          Total: ₹{total.toFixed(2)}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/home")}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            Continue
          </button>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded"
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;