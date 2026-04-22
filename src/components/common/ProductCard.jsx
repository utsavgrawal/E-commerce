import { useNavigate } from "react-router-dom";

function ProductCard({ product, setCartItems }) {

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // important
    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div
      onClick={goToDetail}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        cursor: "pointer"
      }}
    >
      <img src={product.image} alt="" style={{ width: "100%" }} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;