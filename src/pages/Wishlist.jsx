function Wishlist({ wishlistItems, setWishlistItems }) {
  const remove = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlistItems.length === 0 && <p>No items</p>}

      {wishlistItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <button onClick={() => remove(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;