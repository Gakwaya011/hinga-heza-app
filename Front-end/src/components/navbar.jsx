import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
  NaturePeople as LandIcon,
} from '@mui/icons-material';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Paths where the navbar should be hidden
  const hiddenPaths = ['/login', '/signup','/admin'];

  // Check if the current path is in the hiddenPaths array
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Hinga Heza Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-green-600">Hinga Heza</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center text-gray-800 hover:text-green-600">
            <HomeIcon className="mr-2" /> Home
          </Link>
          <Link to="/available-land" className="flex items-center text-gray-800 hover:text-green-600">
            <LandIcon className="mr-2" /> Available Land
          </Link>
          <Link to="/about" className="flex items-center text-gray-800 hover:text-green-600">
            <InfoIcon className="mr-2" /> About
          </Link>
          <Link to="/contact" className="flex items-center text-gray-800 hover:text-green-600">
            <ContactIcon className="mr-2" /> Contact Us
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              <LogoutIcon className="mr-2" /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <LoginIcon className="mr-2" /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 px-4 py-6">
            <li>
              <Link to="/" className="flex items-center text-gray-800 hover:text-green-600" onClick={toggleMenu}>
                <HomeIcon className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/available-land"
                className="flex items-center text-gray-800 hover:text-green-600"
                onClick={toggleMenu}
              >
                <LandIcon className="mr-2" /> Available Land
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center text-gray-800 hover:text-green-600" onClick={toggleMenu}>
                <InfoIcon className="mr-2" /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center text-gray-800 hover:text-green-600" onClick={toggleMenu}>
                <ContactIcon className="mr-2" /> Contact Us
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout();
                    toggleMenu();
                  }}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                >
                  <LogoutIcon className="mr-2" /> Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                  onClick={toggleMenu}
                >
                  <LoginIcon className="mr-2" /> Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
