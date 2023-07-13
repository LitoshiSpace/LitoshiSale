//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

//  Route
// ===========================================================

export const RouteNotLogged = () => {
  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.settings.user);

  // onChange
  useEffect(() => {
    // User is connected
    if (user?.address && location.pathname !== "/mint") navigate("/mint");
  }, [user]);

  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
};
