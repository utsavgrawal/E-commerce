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

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="p-6">
      <img src={product.image} className="h-80" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>₹{product.price}</h2>

      <button
        onClick={() =>
          setCartItems(prev => [...prev, { ...product, quantity: 1 }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;