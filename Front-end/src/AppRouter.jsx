import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
import About from "./pages/about";
import Contact from "./pages/contact";
import AvailableLand from "./pages/availableland";
import BlogPostPage from './pages/BlogPostPage'
import NotFound from "./pages/NotFound"; // Create a NotFound page for 404s

// Reusable ProtectedRoute Component
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const AppRouter = ({ isLoggedIn, onLogin, onGoogleLogin }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Login onLogin={onLogin} />
          )
        }
      />
      <Route
        path="/signup"
        element={<SignUp onGoogleLogin={onGoogleLogin} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<BlogPostPage />} />

      {/* Protected Routes */}
      <Route
        path="/available-land"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <AvailableLand />
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
