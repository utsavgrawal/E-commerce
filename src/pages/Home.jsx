// src/pages/Home.jsx
import { useState, useEffect } from "react";
import ProductCard from "../components/common/ProductCard";

function Home({ setCartItems }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // API fetch
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // filter
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div style={{ padding: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}>
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;