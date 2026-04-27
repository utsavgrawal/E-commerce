import { useNavigate } from "react-router-dom";

function Wishlist({ wishlistItems, setWishlistItems, setCartItems }) {
  const navigate = useNavigate();

  const remove = (id) => {
    setWishlistItems(prev => prev.filter(i => i.id !== id));
  };

  const addToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
  };

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {wishlistItems.map(item => (
        <div key={item.id} className="bg-white p-4 shadow">
          <img src={item.image} className="h-40 mx-auto" />
          <h3>{item.title}</h3>

          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;