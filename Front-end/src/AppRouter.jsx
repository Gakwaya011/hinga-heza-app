import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/Sign-up';
import About from './pages/about';
import Contact from './pages/contact';
import AvailableLand from './pages/availableland';


const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/available-land" element={<AvailableLand />} />

  </Routes>
);

export default AppRouter;
