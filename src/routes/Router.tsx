import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import PrivateRoute from "../components/PrivateRoute.tsx";
import ForgotPassword from "../pages/ForgotPassowrd.tsx";
import Signup from "../pages/Signup.tsx";

const AppRouter: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        {/* Navigate to login or home */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />}/>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />

        {/* private route */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router >
  );
};

export default AppRouter;
