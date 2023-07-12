//  Dependencies
// ===========================================================

import React, { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { NavbarApp } from "#components/Navbars";


//  Route
// ===========================================================

export const RouteLogged = () => {

  // Hooks
  // const navigate = useNavigate();
  // const location  = useLocation();
  const user = null;


  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-[20%] h-full bg-[#555]">
        <NavbarApp 
          user={user} 
        />
      </div>
      <div className="w-[80%] h-full bg-[#666]">
        <Outlet
          context={{
            user,
          }}
        />
      </div>
    </div>
  )
};
