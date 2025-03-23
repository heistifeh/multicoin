import React from "react";

import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.isVerified === true ? (
    <Outlet />
  ) : <Navigate to="/sign-in" /> || currentUser.isVerified === false ? (
    <Navigate to="/verify-email" />
  ) : (
    <Navigate to="/sign-in" />
  );
}
