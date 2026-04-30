import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminProducts from "./pages/AdminProducts";

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
      {/* 🚫 Intro / Login / Signup page pe navbar hide */}
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && (
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

          {/* 🔐 Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

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
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            }
          />

          {/* 📦 Product Detail */}
          <Route
            path="/product/:id"
            element={<ProductDetail setCartItems={setCartItems} />}
          />

          {/* ❤️ Wishlist Protected */}
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  setCartItems={setCartItems}
                />
              </ProtectedRoute>
            }
          />

          {/* 💳 Checkout Protected */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout cartItems={cartItems} />
              </ProtectedRoute>
            }
          />

          {/* 🛠️ Admin Products Protected */}
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <AdminProducts />
              </ProtectedRoute>
            }
          />

          {/* ❌ 404 */}
          <Route
            path="*"
            element={
              <h1 className="p-10 text-center text-2xl font-bold">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;