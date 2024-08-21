import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  // Check if the token exists
  const isAuthenticated = Boolean(token);

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
