import { useEffect, useState } from "react";
import ProductCard from "../components/common/ProductCard";

function Home({ setCartItems, wishlistItems, setWishlistItems }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 📦 Fetch products
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

  // 🔍 Filter
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ⏳ Loading UI
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-300">
        Loading products...
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="p-6 text-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 mb-6 bg-gray-900 border border-gray-700 rounded text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📦 Products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-400">
          No products found 😢
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;