import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../Navbarcomponents/Navbar.jsx";
import Reservador from "../pages/Reservador.jsx";
import Footer from "../Bodycomponents/footer.jsx";
import Chat from "../Bodycomponents/Chat.jsx";
import Blog from "../pages/blog.jsx";
import LoginForm from "../pages/LoginForm.jsx";
import { RegisterForm } from "../pages";
import { HomePage } from "../pages";
import { Perfil } from "../pages";
import { Configuracion } from "../pages";
import Hotelindividual from "../pages/Hotel-individual.jsx";
import { Dashboard } from "../pages";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" state={{ from: '/' }} />}
        />
        <Route
          path="/blog"
          element={isLoggedIn ? <Blog /> : <Navigate to="/login" state={{ from: '/blog' }} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/configuracion"
          element={isLoggedIn ? <Configuracion /> : <Navigate to="/login" state={{ from: '/configuracion' }} />}
        />
        <Route
          path="/perfil"
          element={isLoggedIn ? <Perfil /> : <Navigate to="/login" state={{ from: '/perfil' }} />}
        />
        <Route
          path="/reservador"
          element={isLoggedIn ? <Reservador /> : <Navigate to="/login" state={{ from: '/reservador' }} />}
        />
        <Route
          path="/hotelindividual"
          element={isLoggedIn ? <Hotelindividual /> : <Navigate to="/login" state={{ from: '/hotelindividual' }} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Chat />
      <Footer />
    </>
  );
};
