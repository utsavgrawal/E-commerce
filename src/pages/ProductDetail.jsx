import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductDetail({ setCartItems }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // 🛒 ADD TO CART
  const addToCart = () => {
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

  if (loading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (!product) {
    return <div className="p-6 text-red-400">Product not found ❌</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🖼 IMAGE */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 mx-auto object-contain"
          />
        </div>

        {/* 📦 DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-300 mb-4">
            {product.description}
          </p>

          <h2 className="text-pink-400 text-2xl font-bold mb-6">
            ₹{product.price}
          </h2>

          <button
            onClick={addToCart}
            className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;