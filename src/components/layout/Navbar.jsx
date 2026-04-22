// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc"
    }}>
      <h2>MyStore</h2>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/cart">
        <p>Cart ({cartCount})</p>
      </Link>
    </div>
  );
}

export default Navbar;