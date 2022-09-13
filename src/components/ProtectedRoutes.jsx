import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
