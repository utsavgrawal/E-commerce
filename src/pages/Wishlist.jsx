import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Wishlist({ wishlistItems = [], setWishlistItems, setCartItems }) {
  const navigate = useNavigate();

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setWishlistItems(prev => prev.filter(i => i.id !== id));
    toast("Removed from wishlist ❌");
  };

  // 🛒 ADD TO CART
  const addToCart = (item) => {
    setCartItems(prev => {
      const exist = prev.find(i => i.id === item.id);

      if (exist) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    toast.success("Added to cart 🛒");
  };

  // 😢 EMPTY STATE
  if (!wishlistItems.length) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-xl mb-4">Your wishlist is empty 😢</h2>

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
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

      {wishlistItems.map(item => (
        <div
          key={item.id}
          className="bg-gray-900 text-white p-4 rounded-xl shadow hover:shadow-pink-500/20 transition"
        >
          {/* 🖼 IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="h-40 mx-auto object-contain mb-3"
          />

          {/* 📦 TITLE */}
          <h3 className="text-sm text-gray-300 line-clamp-2">
            {item.title}
          </h3>

          {/* 💰 PRICE */}
          <p className="text-pink-400 font-bold mt-2">
            ₹{item.price}
          </p>

          {/* 🛒 ADD TO CART */}
          <button
            onClick={() => addToCart(item)}
            className="w-full mt-3 bg-gradient-to-r from-pink-500 to-red-500 py-2 rounded"
          >
            Add to Cart
          </button>

          {/* ❌ REMOVE */}
          <button
            onClick={() => removeItem(item.id)}
            className="w-full mt-2 bg-gray-800 py-2 rounded hover:bg-gray-700"
          >
            Remove ❌
          </button>
        </div>
      ))}

    </div>
  );
}

export default Wishlist;