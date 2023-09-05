"use client"
import React, { useState } from 'react';
import Login from '../../components/login';
import AdminContent from '../../components/adminDash';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (isAuthenticated: boolean, jwtToken?: string) => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      setToken(jwtToken || null);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);

    // Optionally, clear the JWT token from storage
    // Example: localStorage.removeItem('jwtToken');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <AdminContent />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default AdminPage;
