import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  setCartItems,
  wishlistItems = [],   // ✅ default value (important)
  setWishlistItems
}) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const addToCart = (e) => {
    e.stopPropagation();

    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === product.id);

      if (exist) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const isWish = wishlistItems.some(
    (i) => i.id === product.id
  );

  const toggleWish = (e) => {
    e.stopPropagation();

    if (isWish) {
      setWishlistItems((prev) =>
        prev.filter((i) => i.id !== product.id)
      );
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  return (
  <div
    onClick={goToDetail}
    style={{
      borderRadius: "12px",
      padding: "15px",
      width: "220px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "0.3s",
    }}
  >
    <img
      src={product.image}
      style={{
        width: "100%",
        height: "150px",
        objectFit: "contain",
        marginBottom: "10px",
      }}
    />

    <h4 style={{
      fontSize: "14px",
      height: "40px",
      overflow: "hidden"
    }}>
      {product.title}
    </h4>

    <p style={{
      fontWeight: "bold",
      margin: "10px 0"
    }}>
      ₹{product.price}
    </p>

    <button
      onClick={addToCart}
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "6px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "6px"
      }}
    >
      Add to Cart
    </button>

    <button
      onClick={toggleWish}
      style={{
        width: "100%",
        padding: "8px",
        backgroundColor: isWish ? "#ff5252" : "#ff4081",
        color: "#fff",
        border: "none",
        borderRadius: "6px"
      }}
    >
      {isWish ? "Remove" : "Wishlist"}
    </button>
  </div>
);
}

export default ProductCard;