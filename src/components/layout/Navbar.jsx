import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">

      {/* 🔥 LEFT SIDE (LOGO) */}
      <div className="text-xl font-bold cursor-pointer">
        MyStore 🛍️
      </div>

      {/* 🔥 RIGHT SIDE */}
      <div className="flex items-center gap-5">

        <Link to="/home">Products</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

        <Link to="/wishlist">
          Wishlist ({wishlistCount})
        </Link>

        {/* 🔥 LOGIN / LOGOUT */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        )}

      </div>
    </div>
  );
}

export default Navbar;