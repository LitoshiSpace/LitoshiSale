//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';


//  Components
// ===========================================================

import Modal from "#components/Modal/Modal";


//  Route
// ===========================================================

export const RouteLogged = () => {

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(state => state.settings.user);

  // User
  useEffect(() => {

    // User is not connected
    if (!user?.address)
      navigate("/home");

  }, [user]);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      <Outlet
        context={{
          user
        }}
      />
      <div className="absolute top-0 right-0 z-[200] p-6">
        <Modal />
      </div>
    </div>
  )
};
