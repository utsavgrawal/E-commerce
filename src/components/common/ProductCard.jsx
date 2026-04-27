import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProductCard({
  product,
  setCartItems,
  wishlistItems = [],
  setWishlistItems
}) {
  const navigate = useNavigate();

  // 🛒 ADD TO CART
  const addToCart = (e) => {
    e.stopPropagation();

    setCartItems(prev => {
      const exist = prev.find(i => i.id === product.id);

      if (exist) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success("Added to cart 🛒");
  };

  // ❤️ CHECK WISHLIST
  const isWish = wishlistItems?.some(i => i.id === product.id);

  // ❤️ TOGGLE WISHLIST
  const toggleWish = (e) => {
    e.stopPropagation();

    if (isWish) {
      setWishlistItems(prev =>
        prev.filter(i => i.id !== product.id)
      );
      toast("Removed from wishlist ❌");
    } else {
      setWishlistItems(prev => [...prev, product]);
      toast.success("Added to wishlist ❤️");
    }
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-gray-900 text-white p-4 rounded-xl shadow-md hover:shadow-pink-500/20 transition cursor-pointer"
    >
      {/* 🖼 IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-3"
      />

      {/* 📦 TITLE */}
      <h3 className="text-sm text-gray-300 line-clamp-2">
        {product.title}
      </h3>

      {/* 💰 PRICE */}
      <p className="text-pink-400 font-bold mt-2">
        ₹{product.price}
      </p>

      {/* 🛒 ADD TO CART */}
      <button
        onClick={addToCart}
        className="w-full mt-3 bg-gradient-to-r from-pink-500 to-red-500 py-2 rounded hover:scale-105 transition"
      >
        Add to Cart
      </button>

      {/* ❤️ WISHLIST */}
      <button
        onClick={toggleWish}
        className="w-full mt-2 bg-gray-800 py-2 rounded hover:bg-gray-700 transition"
      >
        {isWish ? "Remove ❤️" : "Wishlist 🤍"}
      </button>
    </div>
  );
}

export default ProductCard;