import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Intro from "./pages/Intro";

function App() {
  const location = useLocation();

  // 🛒 CART STATE (with localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // ❤️ WISHLIST STATE (with localStorage)
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  // 🔄 SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔄 SAVE WISHLIST
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <>
      {/* 🚫 Intro page pe navbar hide */}
      {location.pathname !== "/" && (
        <Navbar
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
        />
      )}

      {/* 🎬 Page animation wrapper */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* 🔥 Intro Page */}
          <Route path="/" element={<Intro />} />

          {/* 🏠 Home */}
          <Route
            path="/home"
            element={
              <Home
                setCartItems={setCartItems}
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
              />
            }
          />

          {/* 🛒 Cart */}
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

          {/* 📦 Product Detail */}
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                setCartItems={setCartItems}
              />
            }
          />

          {/* ❤️ Wishlist */}
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
                setCartItems={setCartItems}
              />
            }
          />

          {/* 💳 Checkout */}
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} />
            }
          />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;