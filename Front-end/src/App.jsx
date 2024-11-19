import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import AppRouter from './AppRouter';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On initial load, check if there's a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  // Function to handle standard login
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('User logged in');
  };

  // Function to handle Google login
  const handleGoogleLogin = async (response) => {
    try {
      const googleToken = response.credential; // Obtain Google credential
      const res = await axios.post('http://localhost:3000/api/auth/google', { token: googleToken });
      
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token); // Store JWT token in localStorage
        setIsLoggedIn(true); // Update state to logged in
        console.log('User logged in with Google');
      } else {
        console.error('Google login failed:', res.data.message);
      }
    } catch (error) {
      console.error('Google login failed:', error.response?.data || error.message);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear JWT token from localStorage
    console.log('User logged out');
  };

  return (
    <div>
      {/* Pass login state and handlers to Navbar and AppRouter */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <AppRouter
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin} // Pass Google login handler to AppRouter
      />
    </div>
  );
};

export default App;
