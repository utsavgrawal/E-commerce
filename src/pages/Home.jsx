import { useState, useEffect } from "react";
import ProductCard from "../components/common/ProductCard";

function Home({ setCartItems, wishlistItems, setWishlistItems }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        setError("Failed to load");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

 return (
  <div style={{ padding: "30px" }}>

    <input
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "12px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "25px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        justifyContent: "center"
      }}
    >
      {filtered.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          setCartItems={setCartItems}
          wishlistItems={wishlistItems}
          setWishlistItems={setWishlistItems}
        />
      ))}
    </div>

  </div>
);
}

export default Home;