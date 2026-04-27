import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/home"
      className="text-2xl font-bold tracking-wide flex items-center gap-2"
    >
      {/* 🔥 ICON */}
      <span className="text-pink-500">🛍️</span>

      {/* 🏷 TEXT */}
      <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
        MyStore
      </span>
    </Link>
  );
}

export default Logo;