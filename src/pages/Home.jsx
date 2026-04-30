import { useEffect, useState } from "react";
import ProductCard from "../components/common/ProductCard";
import SearchBar from "../components/common/SearchBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home({ setCartItems, wishlistItems, setWishlistItems }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 📦 FETCH PRODUCTS
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products ❌");
        setLoading(false);
      });
  }, []);

  // 🔍 FILTER
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-400 animate-pulse">
        Loading amazing products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 max-w-7xl mx-auto"
    >

      {/* 🔥 HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Explore Products 🔥
          </h1>
          <p className="text-gray-400">
            Find the best deals across categories
          </p>
        </div>

        {/* 🔥 LOGIN BUTTON (Home ki jagah) */}
        {!isLoggedIn && (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        )}
      </div>

      {/* 🔍 SEARCH */}
      <SearchBar onSearch={setSearch} />

      {/* 📦 PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          No products found 😢
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                product={product}
                setCartItems={setCartItems}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Home;