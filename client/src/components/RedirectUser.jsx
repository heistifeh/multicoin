import React from "react";

import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const RedirectUser = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Navigate to="/portfolio" /> : <Outlet />;
};

export default RedirectUser;
