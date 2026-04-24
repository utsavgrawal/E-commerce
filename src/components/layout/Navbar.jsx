import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  return (
   <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#111",
  color: "#fff"
}}>
  <h2>MyStore</h2>

  <div style={{ display: "flex", gap: "25px" }}>
    <Link to="/wishlist" style={{ color: "#fff" }}>
      ❤️ {wishlistCount}
    </Link>

    <Link to="/cart" style={{ color: "#fff" }}>
      🛒 {cartCount}
    </Link>
  </div>
</div>
  );
}

export default Navbar;