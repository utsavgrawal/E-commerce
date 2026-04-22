import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail({ setCartItems }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
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
    <div style={{ padding: "20px" }}>
      <img src={product.image} style={{ width: "200px" }} />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;