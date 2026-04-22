import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import CartIcon from "../common/CartIcon";
function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 25px",
      borderBottom: "2px solid #ccc"
    }}>
      
      <Logo />
      <SearchBar />
      <CartIcon />

    </div>
  );
}

export default Navbar;