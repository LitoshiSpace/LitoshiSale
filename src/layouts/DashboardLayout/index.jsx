//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Discord from "#assets/logo/discord.svg";
import Gitbook from "#assets/logo/gitbook.svg";
import Github from "#assets/logo/github.svg";
import Medium from "#assets/logo/medium.svg";
import Twitter from "#assets/logo/twitter.svg";

//  Components
// ===========================================================

import Modal from "#components/Modal/Modal";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-12 gap-6">
      <h3 className="text-xl text-white text-center font-semibold">
        Find us on
      </h3>
      <div className="w-full h-full flex justify-center items-center gap-6">
        <a href="https://discord.com/invite/litoshimarket">
          <img src={Discord} alt="" />
        </a>
        <a href="https://twitter.com/Litoshimarket">
          <img src={Twitter} alt="" />
        </a>
        <a href="https://medium.com/@litebitmarket">
          <img src={Medium} alt="" />
        </a>
        <a href="https://github.com/LitoshiSpace">
          <img src={Github} alt="" />
        </a>
        <a href="https://litoshi-market.gitbook.io/litoshi-market/">
          <img src={Gitbook} alt="" />
        </a>
      </div>
    </div>
  );
}

//  Route
// ===========================================================

export const RouteNotLogged = () => {
  // Variables
  const [wallet, setWallet] = useState(
    "ltc1q33srfx950rvu3nfzqs5fd3pes6r0gm46rw7uq3"
  );
  const [option, setOption] = useState("500$LTSI");

  // Hooks
  const navigate = useNavigate();
  const user = useSelector((state) => state.settings.user);

  // onChange
  // useEffect(() => {

  //   // User is not connected
  //   if ( !user?.address && (location.pathname !== '/start') )
  //     navigate("/start");

  // }, [user]);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      <Outlet
        context={{
          user,
        }}
      />
    </div>
  );
};
