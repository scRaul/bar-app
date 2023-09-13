"use client";

import "./page.css";
import React, { useState, useEffect } from "react";
import Login from "../../components/login";
import AdminDash from "../../components/adminDash";
import { verifyToken } from "@/controllers/request";

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const jwtStored = localStorage.getItem("jwtToken");
      if (!jwtStored) return;
      const response = await verifyToken(jwtStored);
      if (!response.ok) {
        return;
      }
      setIsLoggedIn(true);
    };
    checkToken();
  }, []);

  const handleLogin = (isAuthenticated: boolean, jwtToken?: string) => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      setToken(jwtToken || null);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("jwtToken");
  };

  return (
    <>
      {isLoggedIn ? (
        <AdminDash onLogOut={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default AdminPage;
