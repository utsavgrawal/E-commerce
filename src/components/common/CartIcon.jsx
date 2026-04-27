function CartIcon({ count }) {
  return (
    <div className="relative">
      🛒
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartIcon;