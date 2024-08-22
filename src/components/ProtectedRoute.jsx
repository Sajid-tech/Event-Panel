import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

const ProtectedRoute = ({ element }) => {
  const { isPanelUp } = useContext(Context);
  const token = localStorage.getItem("token");

  // // Check if the token exists
  // const isAuthenticated = Boolean(token);

  // return isAuthenticated ? element : <Navigate to="/" />;
  if (!token || !isPanelUp?.success) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;

// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { Context } from "../context/Context";

// const ProtectedRoute = ({ element }) => {
//     const { isPanelUp } = useContext(Context);
//     const token = localStorage.getItem("token");

//     if (!token || !isPanelUp?.success) {
//         return <Navigate to="/" />;
//     }

//     return element;
// };

// export default ProtectedRoute;
