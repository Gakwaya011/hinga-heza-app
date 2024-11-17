// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hinga Heza</h1>
      <p className="text-lg">Find the perfect land for agriculture in Rwanda.</p>
      <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Get Started
      </button>
    </div>
  );
};

export default Home;
