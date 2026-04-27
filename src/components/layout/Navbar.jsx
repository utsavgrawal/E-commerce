import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  return (
    <div className="flex justify-between px-6 py-4 bg-white shadow sticky top-0 z-50">
      <Link to="/home" className="font-bold text-xl">
        MyStore
      </Link>

      <div className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/wishlist">❤️ {wishlistCount}</Link>
        <Link to="/cart">🛒 {cartCount}</Link>
      </div>
    </div>
  );
}

export default Navbar;