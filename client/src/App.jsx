import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on page load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login success
  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token); // Store token in local storage
    setIsAuthenticated(true); // Set authentication state to true
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsAuthenticated(false); // Set authentication state to false
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        {/* Login route */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />

        {/* Example protected route */}
        <Route path="/home" element={isAuthenticated ? <Home/>: <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
