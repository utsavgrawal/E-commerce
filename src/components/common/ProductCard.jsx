import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function ProductCard({ product, setCartItems, wishlistItems, setWishlistItems }) {
  const navigate = useNavigate();

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

  const isWish = wishlistItems.some(i => i.id === product.id);

  const toggleWish = (e) => {
    e.stopPropagation();

    if (isWish) {
      setWishlistItems(prev => prev.filter(i => i.id !== product.id));
      toast("Removed ❌");
    } else {
      setWishlistItems(prev => [...prev, product]);
      toast.success("Wishlisted ❤️");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white p-4 rounded shadow cursor-pointer"
    >
      <img src={product.image} className="h-40 mx-auto" />

      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <button onClick={addToCart} className="bg-black text-white w-full mt-2 p-2">
        Add to Cart
      </button>

      <button onClick={toggleWish} className="bg-pink-500 text-white w-full mt-2 p-2">
        {isWish ? "Remove ❤️" : "Wishlist 🤍"}
      </button>
    </motion.div>
  );
}

export default ProductCard;