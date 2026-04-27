import { Link, useLocation } from "react-router-dom";

function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const location = useLocation();

  const linkStyle = (path) =>
    `transition ${
      location.pathname === path
        ? "text-pink-500 font-semibold"
        : "text-gray-300 hover:text-pink-400"
    }`;

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md sticky top-0 z-50 border-b border-gray-800">

      {/* 🔥 LOGO */}
      <Link to="/home" className="text-2xl font-bold text-pink-500">
        MyStore
      </Link>

      {/* 🔗 LINKS */}
      <div className="flex items-center gap-6 text-lg">

        <Link to="/home" className={linkStyle("/home")}>
          Home
        </Link>

        <Link to="/wishlist" className={linkStyle("/wishlist")}>
          ❤️ <span className="ml-1">{wishlistCount}</span>
        </Link>

        <Link to="/cart" className={linkStyle("/cart")}>
          🛒 <span className="ml-1">{cartCount}</span>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;