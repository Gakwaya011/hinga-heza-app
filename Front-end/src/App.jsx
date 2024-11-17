import React, { useState } from 'react';
import Navbar from './components/navbar';
import AppRouter from './AppRouter';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('User logged out');
  };

  return (
    <div>
      {/* Pass login state and logout handler to Navbar */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <AppRouter />
    </div>
  );
};

export default App;
