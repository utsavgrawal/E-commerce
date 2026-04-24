import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <Navbar
        cartCount={totalItems}
        wishlistCount={wishlistItems.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          }
        />

        {/* 🔥 IMPORTANT */}
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;