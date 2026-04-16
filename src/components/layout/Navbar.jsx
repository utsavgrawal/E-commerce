function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 25px",
      borderBottom: "2px solid #ccc"
    }}>
      
      <h2>MyDukkan</h2>

      <input 
        type="text" 
        placeholder="Samaan Dhundlo" 
        style={{ padding: "10px", width: "200px" }}
      />

      <p>Cart (0)</p>

    </div>
  );
}

export default Navbar;