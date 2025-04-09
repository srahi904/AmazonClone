/** @format */

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
// import LoginPage from "./components/UserAccount/LoginPage";
import SignupPage from "./components/UserAccount/SignupPage";
import OrderPage from "./components/OrderPage/OrderPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CartSummaryPage from "./components/CartPage/CartSummaryPage";

import AccountPage from "./components/UserAccount/Account";
import Footer from "./Footer/Footer";
import ReviewPage from "./components/ProductPage/Review";
import SearchResults from "./components/search/SearchResults";
import Wishlist from "./components/wishList/Wishlist";
import CategoryPage from "./components/Category/CategoryPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserAccount from "./components/UserAccount/UserAccount";
import About from "./Footer/About";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <TitleUpdater />

            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route index element={<HomePage />} />
                  <Route
                    path="/category/:categoryId"
                    element={<CategoryPage />}
                  />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/reviews/:productId" element={<ReviewPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/cart-summary" element={<CartSummaryPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/login" element={<UserAccount />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/about" element={<About />} />

                  <Route
                    path="/order"
                    element={
                      <ProtectedRoute>
                        <OrderPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <AccountPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/wishlist"
                    element={
                      <ProtectedRoute>
                        <Wishlist />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

/**  Auto-update tab title based on route */
const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - My Store",
      "/cart": "Your Cart - My Store",
      "/cart-summary": "Cart Summary - My Store",
      "/checkout": "Checkout - My Store",
      "/login": "Login - My Store",
      "/signup": "Sign Up - My Store",
      "/order": "Order History - My Store",
      "/account": "My Account",
    };

    document.title = titles[location.pathname] || "My Store";
  }, [location.pathname]);

  return null;
};
