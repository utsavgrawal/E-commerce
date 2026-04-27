import { Link } from "react-router-dom";

function CartIcon({ count = 0 }) {
  return (
    <Link to="/cart" className="relative">

      {/* 🛒 ICON */}
      <span className="text-2xl">🛒</span>

      {/* 🔢 COUNT BADGE */}
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}

    </Link>
  );
}

export default CartIcon;